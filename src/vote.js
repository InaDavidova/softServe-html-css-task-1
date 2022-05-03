$(document).ready(function () {
    if (!localStorage.getItem("votes")) {
        let votes = {
            paris: 0,
            stockholm: 0,
            dubrovnik: 0,
        };

        localStorage.setItem("votes", JSON.stringify(votes));

    } else {
        let votes = JSON.parse(localStorage.getItem("votes"));

        $("#paris span").text(votes.paris);
        $("#stockholm span").text(votes.stockholm);
        $("#dubrovnik span").text(votes.dubrovnik);
    }

    $(".vote-div").on("click", function (e) {
        const element = e.target;

        if (element.tagName == "I") {
            let votes = JSON.parse(localStorage.getItem("votes"));
            let city = element.parentElement.id;

            votes[city]++;

            element.previousElementSibling.textContent = votes[city];

            localStorage.setItem("votes", JSON.stringify(votes));
        }
    });
});
