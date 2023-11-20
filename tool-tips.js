const btnGraphicDesigner = document.querySelector('#graphic-designer');
const btnCreativeCoder = document.querySelector('#creative-coder');
const tooltip = document.querySelector('#tooltip');

const createPopperInstance = (targetButton, offset, content) => {
  return Popper.createPopper(targetButton, tooltip, {
    placement: 'right',
    modifiers: [
      {
        name: 'offset',
        options: {
          offset: offset,
        },
      },
    ],
  });
};

const popperInstance1 = createPopperInstance(btnGraphicDesigner, [150, 20]);
const popperInstance2 = createPopperInstance(btnCreativeCoder, [160, 20]);

const showTooltip = (popperInstance, content) => {
  tooltip.setAttribute('data-show', '');
  tooltip.innerHTML = `
  Le designer graphique est l’interlocuteur central de la chaîne graphique 
  (conception et création, exécution et impression), 
  à l’écoute du client qui peut être une entreprise, 
  une institution ou encore une collectivité territoriale. 
  Il étudie le cahier des charges et propose des solutions 
  créatives qui répondent aux contraintes économiques qui lui sont imposées. 
  Il est le concepteur visuel des solutions de communication : 
  il intervient dans l’élaboration des supports de 
  communication variés (identité graphiques d’une entreprise ou d’un produit, 
  affiches, livres, revues, brochures…)`;
  popperInstance.update();
};
const showTooltip2 = (popperInstance, content) => {
  tooltip.setAttribute('data-show', '');
  tooltip.innerHTML = `Le code créatif 
   (en anglais creative coding), 
   ou programmation créative, 
   consiste à utiliser l
   a programmation informatique comme un moyen d'expression 
   artistique (visuel, musical, littéraire, interactif, performatif...) 
   à part entière. Hors de la pure création artistique ou musicale, 
   le code créatif peut trouver des applications 
   concrètes dans les domaines de 
   la recherche en informatique graphique, 
   du design (design graphique/graphisme génératif, design numérique), 
   des effets spéciaux, ou encore de la performance (Vjing, Live coding).
  `;
  popperInstance.update();
};

const hideTooltip = () => {
  tooltip.removeAttribute('data-show');
};

const showEvents = ['mouseenter', 'focus'];
const hideEvents = ['mouseleave', 'blur'];

showEvents.forEach((event) => {
  btnGraphicDesigner.addEventListener(event, () => showTooltip(popperInstance1));
  btnCreativeCoder.addEventListener(event, () => showTooltip2(popperInstance2));
});

hideEvents.forEach((event) => {
  btnGraphicDesigner.addEventListener(event, hideTooltip);
  btnCreativeCoder.addEventListener(event, hideTooltip);
});
