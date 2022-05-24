export default {
  message: {
    composables: {
      useValidationRules: {
        emailRule: "L'adresse mail n'est pas valide.",
        requiredRule: 'Ce champ est obligatoire.',
        exactLengthRule: 'La longueur de ce champs doit être exactement de {0} caractère(s)',
      },
      useHelper: {
        languageOptions: {
          fr: 'Français',
          en: 'Anglais',
        },
      },
    },
    components: {
      base: {
        BaseTable: {
          BaseDataTable: {
            currentPageReportTemplate: 'Résultat {first} à {last} de {totalRecords}',
          },
          isLoadingTable: 'Données en chargement ...',
          isEmptyTable: 'Aucune donnée disponible.',
        },
        BaseForm: {
          BaseFormDatepicker: {
            BaseFormDatepicker: {
              dayNames: ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'],
              dayNamesShort: ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'],
              dayNamesMin: ['Di', 'Lu', 'Ma', 'Me', 'Je', 'Ve', 'Sa'],
              monthNames: [
                'Janvier',
                'Février',
                'Mars',
                'Avril',
                'Mai',
                'Juin',
                'Juillet',
                'Août',
                'Septembre',
                'Octobre',
                'Novembre',
                'Décembre',
              ],
              monthNamesShort: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Jui', 'Jul', 'Aoû', 'Sep', 'Oct', 'Nov', 'Déc'],
              today: "Aujourd'hui",
              weekHeader: 'Wk',
              firstDayOfWeek: 1,
              dateFormat: 'dd/mm/yyyy',
            },
          },
          BaseFormFileUpload: {
            BaseFormFileUpload: {
              choose: 'Choisir un fichier',
              upload: 'Upload',
              cancel: 'Annuler',
              empty: 'Faites glisser et déposez les fichiers ici pour les télécharger',
              invalidFileSizeMessage: '{zero}: Taille de fichier non valide, la taille du fichier doit être inférieure à {first}.',
              invalidFileTypeMessage: '{zero}: Type de fichier non valide, types de fichiers autorisés : {first}.',
              invalidFileLimitMessage: 'Nombre maximun de fichiers dépassés, la limite est de {zero} fichier(s) maximum.',
            },
          },
        },
      },
    },
  },
}
