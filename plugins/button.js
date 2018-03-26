module.exports = function (options) {

    return function ({ addComponents, e }) {
        addComponents(

   {'.ui.button': '@apply .inline-block .leading-tight .text-base .font-bold .py-2 .px-4 .rounded .shadow .bg-grey-light .text-grey-darkest',
    '.ui.button:hover' : '@apply .bg-grey',
   /*   '.ui.small.button' : '@apply .text-sm .py-2 .px-3',
      '.ui.large.button' : '@apply .text-xl .py-3 .px-6',
      '.ui.blue.button' : '@apply .bg-blue .text-white',
      '.ui.blue.button:hover' : '@apply .bg-blue-dark',
      '.ui.button.green' : '@apply .bg-green .text-white',
      '.ui.green.button:hover' : '@apply .bg-green-light'*/
    }

        );
    }

}