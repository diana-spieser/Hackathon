function randomChoice(arr) {
    return arr[Math.floor(arr.length * Math.random())];
}

function randomLocation() {
    return randomChoice(['Antibes', 'Nice', 'Biot', 'Valbonne', 'Bretz', 'Grenoble', 'Lyon', 'Paris', 'Marseille', 'Toulon', 'Toulouse', 'Bordeaux', 'Lille', 'Strasbourg', 'Nantes', 'Rennes', 'Montpellier', 'Brest', 'Le Havre', 'Reims', 'Tours', 'Dijon', 'Angers', 'Nancy', 'Saint-Étienne', 'Metz', 'Caen', 'Orléans', 'Rouen', 'Mulhouse', 'Perpignan', 'Boulogne-Billancourt', 'Besançon', 'Toulon', 'Toulouse', 'Bordeaux', 'Lille', 'Strasbourg', 'Nantes', 'Rennes', 'Montpellier', 'Brest', 'Le Havre', 'Reims', 'Tours', 'Dijon', 'Angers', 'Nancy', 'Saint-Étienne', 'Metz', 'Caen', 'Orléans', 'Rouen', 'Mulhouse', 'Perpignan', 'Boulogne-Billancourt', 'Besançon', 'Toulon', 'Toulouse', 'Bordeaux', 'Lille', 'Strasbourg', 'Nantes', 'Rennes', 'Montpellier', 'Brest', 'Le Havre', 'Reims', 'Tours', 'Dijon', 'Angers', 'Nancy', 'Saint-Étienne', 'Metz', 'Caen', 'Orléans', 'Rouen', 'Mulhouse', 'Perpignan', 'Boulogne-Billancourt', 'Besançon', 'Toulon', 'Toulouse', 'Bordeaux', 'Lille', 'Strasbourg', 'Nantes', 'Rennes', 'Montpellier', 'Brest', 'Le Havre', 'Reims', 'Tours', 'Dijon', 'Angers', 'Nancy', 'Saint-Étienne', 'Metz', 'Caen', 'Orléans', 'Rouen', 'Mulhouse', 'Perpignan', 'Boulogne-Billancourt', 'Besançon', 'Toulon', 'Toulouse', 'Bordeaux', 'Lille', 'Strasbourg', 'Nantes', 'Rennes', 'Mont']);
}

function randomEvent() {
    return randomChoice(['Cinéma', 'Concours Escalade', 'Pluie', 'Concert', 'Festival', 'Fête', 'Foire', 'Marché', 'Salon', 'Spectacle', 'Sport', 'Théâtre', 'Visite guidée', 'Exposition'])
}

function randomMark() {
    return randomChoice(['fa-regular fa-circle-xmark', 'fa-regular fa-circle-check'])
}

// When the page is ready, append 30 new events to the list_event
// event : 
{/* <div class="event">
                <div class="title">Cinéma</div>
                <div class="items">Nice <i class="fa-solid fa-location-dot"></i></div>
                <div class="items"><a href="create.html?title=Cinéma&location=Antibes"><i
                            class="fa-regular fa-clone"></i></a></div>
                <div class="items"><i class="fa-regular fa-circle-xmark"></i></div>
            </div> */}
$(document).ready(function () {
    list_event = $('#list_event');
    var urlParams = new URLSearchParams(window.location.search);
    var title = urlParams.get('title');
    var location = urlParams.get('location');
    if (title != null && location != null) {
        list_event.append('<div class="event"><a id="bigtitle"><div class="title">' + title + '</div></a><div class="items">' + location + ' <i class="fa-solid fa-location-dot"></i></div><div class="items"><a href="create.html?title=' + title + '&location=' + location + '"><i class="fa-regular fa-clone"></i></a></div><div class="items"><i class="' + randomMark() + '"></i></div></div>');
    }
    for (var i = 0; i < 5; i++) {
        levent = randomEvent();
        lloc = randomLocation();
        list_event.append('<div class="event"><a id="bigtitle"><div class="title">' + levent + '</div></a><div class="items">' + lloc + ' <i class="fa-solid fa-location-dot"></i></div><div class="items"><a href="create.html?title=' + levent + '&location=' + lloc + '"><i class="fa-regular fa-clone"></i></a></div><div class="items"><i class="' + randomMark() + '"></i></div></div>');
    }

    $("#event").click(function () {
        var urlParams = new URLSearchParams(window.location.search);
        var title = urlParams.get('title');
        var location = urlParams.get('location');
        if (title != null && location != null) {
            list_event.append('<div class="event"><a id="bigtitle"><div class="title">' + title + '</div></a><div class="items">' + location + ' <i class="fa-solid fa-location-dot"></i></div><div class="items"><a href="create.html?title=' + title + '&location=' + location + '"><i class="fa-regular fa-clone"></i></a></div><div class="items"><i class="' + randomMark() + '"></i></div></div>');
        }
}
);})
