import data from "/src/projects.json";

$(document).ready(function () {
    for (let index = 0; index < data.length; index++) {
        const element = data[index];
        const content = element.contenu;
        console.log(content);
        const buttonicon = $('<i>')
            .addClass('<i class="bi bi-arrow-return-right me-2"></i>');
        var button = $('<button>')
            .text(element.titre)
            .attr({
                "type": "button",
                "id": "button-" + index,
                "class": "btn btn-outline-warning"
            })
            .on('click', function () {
                $('#project-text').load(content);
                $('#project-list button').removeClass("active");
                $(this).addClass("active");
            });

        var listItem = $('<li>')
            .addClass('m-3')
            .append(buttonicon)
            .append(button)
        $("#project-list")
            .append(listItem);

        if (index == 0) button.trigger("click");
    }
});