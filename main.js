
$(document).ready(function() { 
    var formData = [
        {
            label: "Buy new sweatshirt",
            state: true,
        },
        {
            label: "Begin promotional phase",
            state: true,
        },
        {
            label: "Read an article",
            state: false,
        }, 
        {
            label: "Try not to fall asleep",
            state: false,
        }, 
        {
            label: "Watch 'Sherlock'",
            state: false,
        }, 
        {
            label: "Begin QA for the product",
            state: false,
        },
        {
            label: "Go for a walk",
            state: false,
        },
    ];

    var stringData = formData.map(function(item, index, arr){
        return `<label class="form-item">
        <input class="checkbox" type="checkbox" ${item.state ? 'checked' : ''}>
        <span class="title">${item.label}</span>
        <i class="far fa-circle"></i>
        <i class="fab fa-creative-commons-sampling fab-checked"></i>
        </label>`
    }).join("");

    $(".parent").append(stringData);

    
    $(".button-js").on("click", function() {

        var value = $(".field-new-item").val();
        console.log(value);

        if (value !== "") {

            $(".parent").append(`<label class="form-item">
            <input class="checkbox" type="checkbox" >
            <span class="title">${value}</span>
            <i class="far fa-circle"></i>
            <i class="fab fa-creative-commons-sampling fab-checked"></i>
            </label>`);

            $(".field-new-item").val("");

        }
    });



    
});
