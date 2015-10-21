//////////////////////////////////////////////////////////////////////////// Initialisation ////////////////////////////////////////////////////////////////////////////
var actions = []; // Initialisation des actions
var id = 0;

//////////////////////////////////////////////////////////////////////////// Objets ////////////////////////////////////////////////////////////////////////////
///// Class Action CRUD /////
class Action{
    
    // Initialisation des actions
    constructor(action){
        
        this.action = action;
        this.id = id++;
        this.urgent = "";
        
    }
    
    // Création d'une action
    create(){
        
        actions.push({
            
            name: this.action,
            id: this.id,
            urgent: this.urgent
            
        });
        
        this.read();
        removeAction();
        
    }
    
    // Afficher les actions
    read(){
        
        let action;
        let liste = document.getElementById("listToDo");
        liste.innerHTML = "";
        
        for(action of actions){
        
            liste.innerHTML += `<li class="${action.urgent}">${action.name} <i indexaction="${action.id}" class="glyphicon glyphicon-remove"></i></li>`;
        
        }
        
    }
    
    // Mise à jour d'une action
    update(){}
    
    // Supprimer une action
    delete(id){
        
        let indexToRemove;
        let action, index;
        
        // Récupération de l'index de l'action dans le tableau des actions
        for([index, action] of actions.entries()){
            
            if(action.id == id){
                
                indexToRemove = index;
                
            }
            
        }
        
        actions.splice(indexToRemove, 1);
        this.read();
        removeAction();
        
    }
    
}

///// Class Action Urgente CRUD /////
class Urgent extends Action{
    
    // Initialisation des actions
    constructor(action){
        
        super(action);
        this.urgent = "urgent";
        
    }
    
}

//////////////////////////////////////////////////////////////////////////// Controllers ////////////////////////////////////////////////////////////////////////////
var action;
var actionUrgent;

///// Initialisation des actions /////
var init = function(){
    
    let initArr = ["Acheter du pain", "Aller chez le vétérinaire", "Prendre RDV chez le médecin"];
    let actionInit;
    
    for(actionInit of initArr){
        
        action = new Action(actionInit);
        action.create();
        
    }
    
};
init();

///// Ajouter une action /////
function addAction(){
    
    let btn = document.getElementById("addAction");
    let actionToDo = document.getElementById("actionToDo");
    let urgent = document.getElementById("urgent");
        
    btn.addEventListener("click", (e) => {

        e.preventDefault();

        let result = actionToDo.value;

        if(result === ""){ // Si résultat vide

            return;

        }
        
        // Création de l'action
        if(urgent.checked){
            
            actionUrgent = new Urgent(result);
            actionUrgent.create();
            
            urgent.checked = false; // Réinitialisation de la checkbox
            
        }else{
            
            action = new Action(result);
            action.create();
            
        }
        
        actionToDo.value = ""; // Suppression texte input

    });
    
}
addAction();

///// Supprimer une action /////
function removeAction(){
    
    let remove = document.getElementsByClassName("glyphicon-remove");
    let max = remove.length;

    let i = 0;
    for(; i < max; i++){

        remove[i].addEventListener("click", function(){

            let id = this.getAttribute("indexaction");

            // Suppression de l'action
            action.delete(id);

        });

    }
    
}