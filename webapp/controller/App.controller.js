sap.ui.define(
  ['sap/ui/core/mvc/Controller', 'sap/ui/model/json/JSONModel'],
  function (Controller, JSONModel) {
    'use strict'

    return Controller.extend('project1.controller.App', {
      onInit() {
        // creo un modello json
        const oModel = new JSONModel({
          listaMaster: [
            {
              id: '1',
              name: 'Item 1',
              description: 'Description 1',
            },
            {
              id: '2',
              name: 'Item 2',
              description: 'Description 2',
            },
            {
              id: '3',
              name: 'Item 3',
              description: 'Description 3',
            },
          ],
        })
        // setto il modello nella view --> modello
        this.getView().setModel(oModel, 'modello')
      },
      onItemPress(oEvent) {
        // prendo l'oggetto selezionato
        const oSelected = oEvent.getParameter('listItem')
        // recupero il binding al modello
        const oBinding = oSelected.getBindingContext('modello')
        // recupero l'oggetto selezionato
        const oObject = oBinding.getObject()
        alert(oObject)
        const { sPath } = oBinding
        debugger
        this.getView().getModel('modello')
        this.getView().getModel().getData()
      },
      onNavMaster1() {
        const splitApp = this.getView().byId('app')
        splitApp.toMaster(this.createId('Master'))
      },
      onNavMaster2() {
        const splitApp = this.getView().byId('app')
        splitApp.toMaster(this.createId('Master2'))
      },
      onNavDetail1() {
        const splitApp = this.getView().byId('app')
        splitApp.toDetail(this.createId('Detail'))
      },
      onNavDetail2() {
        const splitApp = this.getView().byId('app')
        splitApp.toDetail(this.createId('Detail2'))
      },
    })
  }
)
