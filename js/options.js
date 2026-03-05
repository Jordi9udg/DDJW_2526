import {$} from "../library/jquery-4.0.0.slim.module.min.js";

const default_options = {
    pairs: 2,
    difficulty: 'normal'
} 

var pairs = $('#pairs');
var difficulty = $('#dif');

var options = Object.create(default_options);

pairs.on('change', function (){
    options.pairs = pairs.val();
});

difficulty.on('change', function (){
    options.difficulty = difficulty.val();
});

$('#default').on('click', function(){
    options.pairs = default_options.pairs;
    options.difficulty = default_options.difficulty;
    pairs.val(options.pairs);
    difficulty.val(options.difficulty);
})

$('#apply').on('click', function(){
    // TODO: Save
    location.assign("../");
});
