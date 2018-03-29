import Validator from 'indicative/builds/validator'
import {
    email,
    required,
    min,
    max
} from 'indicative/builds/validations'

import {
    Vanilla
} from 'indicative/builds/formatters'

const messages = {
    required: 'The field is required'
  }

const v = Validator({
    email,
    required,
    min,
    max
}, Vanilla)

export default function validator(node, text) {

    this.isFormValid = async function (form) {
        const schema = getSchema(form)

        try {
            await v.validateAll(schema.data, schema.rules, messages)
            return true
        } catch (e) {
            for (let field of form.elements) {
                const result = e.find(item => item.field === field.name);

                if (result) {
                    field.nextElementSibling.textContent = result.message
                    field.setCustomValidity(result.message)
                }
            }
            return false
        }
    }

    function getSchema(form) {
        const formData = new FormData(form)
        let data = {};
        let rules = {};

        formData.forEach(function (value, key) {
            data[key] = value;
        });
        for (let field of form.elements) {
            if (field.name) {
                rules[field.name] = field.dataset.rules
            }
        }
        return {
            data,
            rules
        }
    }

    async function onChange(event) {
        const schema = getSchema(event.target.form)

        try {
            await v.validate(schema.data, schema.rules, messages)
            event.target.nextElementSibling.textContent = ''
            event.target.setCustomValidity('')

        } catch (e) {

            if (event.target.name === e[0].field) {
                event.target.nextElementSibling.textContent = e[0].message
                event.target.setCustomValidity(e[0].message)
            } else {
                event.target.nextElementSibling.textContent = ''
                event.target.setCustomValidity('')
            }
        }
    }

    if (node.tagName === 'INPUT')
        node.addEventListener('input', onChange);
    else {
        node.addEventListener('change', onChange);
    }

    return {
        destroy() {
            if (node.tagName === 'INPUT')
                node.removeEventListener('input', onChange);
            else {
                node.removeEventListener('change', onChange);
            }
        }
    }

}