//////////////////////////////////////////////////////////////////////////// Initialisation ////////////////////////////////////////////////////////////////////////////
"use strict";

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var actions = []; // Initialisation des actions

//////////////////////////////////////////////////////////////////////////// Objets ////////////////////////////////////////////////////////////////////////////
///// Class Action CRUD /////

var Action = (function () {

    // Initialisation des actions

    function Action(action) {
        _classCallCheck(this, Action);

        this.action = action;
        this.urgent = "";
    }

    ///// Class Action Urgente CRUD /////

    // Création d'une action

    _createClass(Action, [{
        key: "create",
        value: function create() {

            actions.push({

                name: this.action,
                urgent: this.urgent

            });

            this.read();
            removeAction();
        }

        // Afficher les actions
    }, {
        key: "read",
        value: function read() {

            var action = undefined,
                index = undefined;
            var liste = document.getElementById("listToDo");
            liste.innerHTML = "";

            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = actions.entries()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var _step$value = _slicedToArray(_step.value, 2);

                    index = _step$value[0];
                    action = _step$value[1];

                    liste.innerHTML += "<li class=\"" + action.urgent + "\">" + action.name + " <i indexaction=\"" + index + "\" class=\"glyphicon glyphicon-remove\"></i></li>";
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator["return"]) {
                        _iterator["return"]();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
        }

        // Mise à jour d'une action
    }, {
        key: "update",
        value: function update() {}

        // Supprimer une action
    }, {
        key: "delete",
        value: function _delete(indexToRemove) {

            actions.splice(indexToRemove, 1);
            this.read();
            removeAction();
        }
    }]);

    return Action;
})();

var Urgent = (function (_Action) {
    _inherits(Urgent, _Action);

    // Initialisation des actions

    function Urgent(action) {
        _classCallCheck(this, Urgent);

        _get(Object.getPrototypeOf(Urgent.prototype), "constructor", this).call(this, action);
        this.urgent = "urgent";
    }

    //////////////////////////////////////////////////////////////////////////// Controllers ////////////////////////////////////////////////////////////////////////////
    return Urgent;
})(Action);

var action;
var actionUrgent;

///// Initialisation des actions /////
var init = function init() {

    var initArr = ["Acheter du pain", "Aller chez le vétérinaire", "Prendre RDV chez le médecin"];
    var actionInit = undefined;

    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
        for (var _iterator2 = initArr[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            actionInit = _step2.value;

            action = new Action(actionInit);
            action.create();
        }
    } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion2 && _iterator2["return"]) {
                _iterator2["return"]();
            }
        } finally {
            if (_didIteratorError2) {
                throw _iteratorError2;
            }
        }
    }
};
init();

///// Ajouter une action /////
function addAction() {

    var btn = document.getElementById("addAction");
    var actionToDo = document.getElementById("actionToDo");
    var urgent = document.getElementById("urgent");

    btn.addEventListener("click", function (e) {

        e.preventDefault();

        var result = actionToDo.value;

        if (result === "") {
            // Si résultat vide

            return;
        }

        // Création de l'action
        if (urgent.checked) {

            actionUrgent = new Urgent(result);
            actionUrgent.create();

            urgent.checked = false; // Réinitialisation de la checkbox
        } else {

                action = new Action(result);
                action.create();
            }

        actionToDo.value = ""; // Suppression texte input
    });
}
addAction();

///// Supprimer une action /////
function removeAction() {

    var remove = document.getElementsByClassName("glyphicon-remove");
    var max = remove.length;

    var i = 0;
    for (; i < max; i++) {

        remove[i].addEventListener("click", function () {

            var index = this.getAttribute("indexaction");

            // Suppression de l'action
            action["delete"](index);
        });
    }
}
//# sourceMappingURL=app.js.map
