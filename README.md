# jquery.popSelectOptions

A simple jquery plugin to populate a select element(s) with options from an array. It takes 2 parameters:

1. options: An array of dictionaries, storing the value of each option tag, and the label to display. Default: [{'value': '-', 'label': 'Default option'}]
2. default: The position in the options array to use as the default item. Default: 0

### Prerequisites

jquery 2.0.1


### Set up

Install the plugin, and use the following source code as an example. Basic use (using the default syntax), more examples can be found in the demo folder.

##### HTML
```
<div class="form-row my-2">
    <div class="form-group col-md-4">
        <label for="distance">Distance</label>
    </div>
    <div class="form-group col-md-8">
        <select id="distance" class="form-control"></select>
    </div>
</div>
```

##### javascript
```
<script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script>
<script src="../dist/jquery.popSelectOptions.min.js"></script>
<script>
    var distances = [
        {'value': '1609.34', 'label': 'Mile(s)'},
        {'value': '1000', 'label': 'Kilometre(s)'},
        {'value': '1', 'label': 'Metre(s)'},
        {'value': '0.9144', 'label': 'Yard(s)'},
        {'value': '0.3048', 'label': 'Feet'}
    ];
    $(function() {
        $('#distance').popSelectOptions({'options': distances, 'default':2});
    })
</script>
```

## Examples

View the examples in the demo folder. 

## Author

* **Gareth Cadwaladr** - *Initial work* - [gar-cad](https://github.com/gar-cad)

See also the list of [contributors](https://github.com/gar-cad/jquery.popSelectOptions/graphs/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.MD) file for details