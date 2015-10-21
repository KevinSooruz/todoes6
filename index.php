<!DOCTYPE html>
<html lang="fr">
<head>
<title>Todo ES6</title>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0">
<meta name="description" content="Todo ES6">
<meta name="keywords" content="Todo ES6">
<!--<meta http-equiv="X-UA-Compatible" content="IE=EmulateIE9">-->
<link rel="stylesheet" type="text/css" href="app/css/style.css">
<link href='http://fonts.googleapis.com/css?family=Lato:300,400,700,900' rel='stylesheet' type='text/css'>
</head>
<body>
    
    <div id="containerBox" class="container">
        <h1>Todo ES6</h1>
        <form class="form-horizontal">
            <div class="form-group">
                <label class="col-md-2 control-label" for="actionToDo">Action</label>
                <div class="col-md-7">
                    <input class="form-control" id="actionToDo" name="actionToDo" placeholder="Ajoutez une action" />
                </div>
                <div class="col-md-3">
                    <input type="checkbox" id="urgent" name="urgent" /> Urgent
                </div>
            </div>
            <button id="addAction" class="btn btn-primary">Ajouter</button>
        </form>
        <ul id="listToDo"></ul>
    </div>

<script type="text/javascript" src="app/js/app.js"></script>
    
</body>
</html>