const steps = document.querySelectorAll('.stepper-item');
const typeWrapper = document.querySelectorAll('.typeWrapper');

let activePrimary = false;
let togleMap = true;
let checkId = true;
let stepperFlag = false;
let stepActiveId = 1;


const mapHtml = '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d5873.503522773722!2d-122.40700885535698!3d37.75875723485357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sua!4v1699547569699!5m2!1sen!2sua"  height="450" style="border:0; width:100%;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';

const listHtml = `<div class="row store-list-wrapper align-items-center row-cols-lg-3 g-lg-4 row-cols-md-2 row-cols-sm-2 g-md-4 g-sm-3 g-4">
                    <div class="col ">
                        <div class="item-card store-list-card border rounded d-flex justify-content-lg-start align-items-center flex-column overflow-hidden" data-storeName="store name 1" data-storeImg="store1">
                            <div class="store-img">
                                <img src="./assets/images/stores/store1.png" alt="store1">
                            </div>
                            <div class="store-name">
                                <h5>Store name 1</h5>
                            </div>
                            <div class="store-zip">
                                <p>8961-1 North Blackburn Ave.Milton, MA 02186</p>
                            </div>

                        </div>
                    </div>
                    <div class="col ">
                        <div class="item-card store-list-card border rounded d-flex justify-content-lg-start align-items-center flex-column overflow-hidden" data-storeName="store name 2" data-storeImg="store2">
                            <div class="store-img">
                                <img src="./assets/images/stores/store2.png" alt="store2">
                            </div>
                            <div class="store-name">
                                <h5>Store name 2</h5>
                            </div>
                            <div class="store-zip">
                                <p>8961-2 North Blackburn Ave.Milton, MA 02186</p>
                            </div>

                        </div>
                    </div>
                    <div class="col ">
                        <div class="item-card store-list-card border rounded d-flex justify-content-lg-start align-items-center flex-column overflow-hidden" data-storeName="store name 3" data-storeImg="store3">
                            <div class="store-img">
                                <img src="./assets/images/stores/store3.png" alt="store3">
                            </div>
                            <div class="store-name">
                                <h5>Store name 3</h5>
                            </div>
                            <div class="store-zip">
                                <p>8961-3 North Blackburn Ave.Milton, MA 02186</p>
                            </div>
                       
                        </div>
                    </div>
                    <div class="col ">
                        <div class="item-card store-list-card border rounded d-flex justify-content-lg-start align-items-center flex-column overflow-hidden" data-storeName="store name 4" data-storeImg="store4">
                            <div class="store-img">
                                <img src="./assets/images/stores/store4.png" alt="store4">
                            </div>
                            <div class="store-name">
                                <h5>Store name 4</h5>
                            </div>
                            <div class="store-zip">
                                <p>8961-4 North Blackburn Ave.Milton, MA 02186</p>
                            </div>
                           
                        </div>
                    </div>
                    <div class="col ">
                        <div class="item-card store-list-card border rounded d-flex justify-content-lg-start align-items-center flex-column overflow-hidden" data-storeName="store name 6" data-storeImg="store5">
                        <div class="store-img">
                            <img src="./assets/images/stores/store5.png" alt="store5">
                        </div>
                        <div class="store-name">
                                <h5>Store name 5</h5>
                            </div>
                            <div class="store-zip">
                                <p>8961-5 North Blackburn Ave.Milton, MA 02186</p>
                            </div>
                         
                        </div>
                    </div>
                    <div class="col ">
                        <div class="item-card store-list-card border rounded d-flex justify-content-lg-start align-items-center flex-column overflow-hidden" data-storeName="store name 7" data-storeImg="store7">
                            <div class="store-img">
                                <img src="./assets/images/stores/store6.png" alt="store6">
                            </div>
                            <div class="store-name">
                                <h5>Store name 6</h5>
                            </div>
                            <div class="store-zip">
                                <p>8961-6 North Blackburn Ave.Milton, MA 02186</p>
                            </div>
                          
                        </div>
                    </div>
                    <div class="col ">
                        <div class="item-card store-list-card border rounded d-flex justify-content-lg-start align-items-center flex-column overflow-hidden" data-storeName="store name 8" data-storeImg="store8">
                            <div class="store-img">
                                <img src="./assets/images/stores/store7.png" alt="store7">
                            </div>
                            <div class="store-name">
                                <h5>Store name 7</h5>
                            </div>
                            <div class="store-zip">
                                <p>8961-7 North Blackburn Ave.Milton, MA 02186</p>
                            </div>
                          
                        </div>
                    </div>
                    <div class="col ">
                        <div class="item-card store-list-card border rounded d-flex justify-content-lg-start align-items-center flex-column overflow-hidden" data-storeName="store Name 9" data-storeImg="store9">
                            <div class="store-img">
                                <img src="./assets/images/stores/store8.png" alt="store8">
                            </div>
                            <div class="store-name">
                                <h5>Store name 8</h5>
                            </div>
                            <div class="store-zip">
                                <p>8961-8 North Blackburn Ave.Milton, MA 02186</p>
                            </div>
                          
                        </div>
                    </div>
                    </div>`


let modelItem = {
    model: '',
    string: '',
};
let problemDetails = [];
let storeItem = {
    store: '',
    string: '',
}

$(function() {
	//The passed argument has to be at least a empty object or a object with your desired options
	$(".hidden-row-wrapper").overlayScrollbars({
        // className       : "hidden-row-wrapper",
        // resize          : "both",
        // sizeAutoCapable : true,
        // paddingAbsolute : true,
        scrollbars : {
            // dragScrolling    : true,
            clickScrolling   : false,
            touchSupport     : true,
	    } ,
        overflowBehavior : {
            x : "hidden",
            y : "scroll"
        },
        nativeScrollbarsOverlaid: {
            initialize: true,
        }
});
});


// func for check firs 4 page and activate primmary button
const toggleState = (param) => {

    switch (param) {
        case 'enable':
            $('.btn').addClass('active-btn');
            activePrimary = true;
            break;
        case 'disable':
            $('.btn').removeClass('active-btn');
            activePrimary = false;
            break;

    }
}
$('.stepper-item').on('click', function(event) {
    const stepperItem = event.target.closest('.stepper-item');
    if (stepperItem) {
        if (stepperItem.id < stepActiveId) {
            stepActiveId = +stepperItem.id;
            steps.forEach((stepElement) => {
                if (stepElement.id == stepActiveId) {
                    stepElement.classList.remove('completed');
                    stepElement.classList.add('step-active');
                    typeWrapper.forEach(element => {
                        if(Number(element.dataset.id) == stepActiveId){
                            element.classList.remove('type-wrapper-hidden');
                        } else {
                            element.classList.add('type-wrapper-hidden');
                        }
                    });
                    if (stepActiveId <= 3) {
                        checkId = true
                        toggleState('enable');
                    } else {
                        checkId = false
                        toggleState('enable');
                    };
                }
                if (stepElement.id > stepActiveId) {
                    stepElement.classList.remove('completed');
                    stepElement.classList.remove('step-active');
                }
            })
        }
        stepperFlag = false;

    }
});

function fillData() {

    let deviceImg = `<img class="insert-device-img" src="./assets/images/model/${modelItem.string}.png" alt="device">`
    let deviceName = `<span class="insert-device-name">  ${modelItem.model}</span>`



    console.log('filldata');
    $('#append-device-img').append(deviceImg);
    $('#append-device-name').append(deviceName);

    // modelItem.model = '';
    // modelItem.string = '';
}

// FUNCTION FOR GET DATA FOR ADD ITEM INTO QUOTE INFORMATION
function getData(event, clickElem) {

        switch (stepActiveId) {
            case 3: 
                if(clickElem) {
                    modelItem.model = event.target.innerText;
                    modelItem.string = clickElem.dataset.model;
                }
                
            break
            case 4:
                let sameId = false
                if (event.target.type === 'checkbox') {
                    problemDetails.forEach(element => {
                        if (element.problemId === +event.target.dataset.problemid) {
                            problemDetails.splice(problemDetails.indexOf(element), 1);
                            sameId = true
                        }
                    })
                    if (sameId) {
                        return false 
                    } else {
                        problemDetails.push({
                            problem: event.target.dataset.problem,
                            problemImg: event.target.dataset.problemimg,
                            problemId: +event.target.dataset.problemid
                        });
                        sameId = false;
                    }
                }
            break
            case 5:
                if(clickElem) {
                    storeItem.store = clickElem.dataset.storename;
                    storeItem.string = clickElem.dataset.storeimg;

                }
                console.log(storeItem);
            break
            case 6: 
                $('.insert-device-img').remove()
                $('.insert-device-name').remove();
                fillData();
            break
        }


    // }
    
}

function goToLocation(){
    console.log('gotolocation');
    typeWrapper.forEach(element => {
        if (Number(element.dataset.id) == 5) {
            element.classList.remove('type-wrapper-hidden');
        } else {
            element.classList.add('type-wrapper-hidden');
        }

    })
    steps.forEach((stepElement) => {
        if (+stepElement.id === 5) {
            stepElement.classList.remove('completed');
            stepElement.classList.add('step-active');
        } else if (+stepElement.id > 5) {
            stepElement.classList.remove('completed');
            stepElement.classList.remove('step-active');
        } else {
            stepElement.classList.add('completed');
            stepElement.classList.remove('step-active');
        }
    })
    stepActiveId = 5;
    checkId = true;
}


// function for check window click and mark selected card
$(window).on('click', function(event) {

    let clickElem = event.target.closest('.item-card');
    const itemCard = document.querySelectorAll('.item-card');
    console.log(checkId);
    if (checkId) {
        itemCard.forEach(element => {
            element.classList.remove('item-card-active');
            if (!event.target.id == 'send-btn' || activePrimary) {
                toggleState('disable'); 
            }
        })
        if(clickElem) {
           clickElem.classList.add('item-card-active');
           toggleState('enable');
    
        } 
        
    } 
    getData(event, clickElem);


    
    return
})






// function for check primmary button click and toggle top steps and blocks
$('.btn').on('click', function(event){

    // console.log(event);
    if (event.target.id === 'change-store-btn') {
        goToLocation();
        console.log('ok');
        return false
    } 

    if (event.target.id === 'change-appointment-store') {
        $('.book-appointment').addClass('appointment-hidden');
        $('.widget-stepper').removeClass('stepper-hidden');
        goToLocation();
        return false
    }


    let id;

    if (activePrimary || !event.target.id == 'send-btn') {

        steps.forEach((element) => {

            if (element.classList.contains('step-active')) {
                element.classList.replace('step-active', 'completed');
    
                id = Number(element.id) + 1;
        
            }
        })
        $(`#${id}`).addClass('step-active');
        stepActiveId = id;
        typeWrapper.forEach(element => {
            if(Number(element.dataset.id) == id){
                element.classList.remove('type-wrapper-hidden');
            } else {
                element.classList.add('type-wrapper-hidden');
            }
        });

        if (stepActiveId <= 3 || stepActiveId == 5) {
            checkId = true
            toggleState('enable');
        } else {
            checkId = false
            toggleState('enable');
        };

        // if (stepActiveId >= 3) {

        // }
        $("html, body").animate({ scrollTop: 0 }, 5);

    
    };

});

// function for 5 blocks toggle map and list
$('.list-map-btn').on('click', function(){

    if (!togleMap) {
        $('.list-map').empty();
        $('.list-map').append(mapHtml);
        $('#viewMap').addClass('hidden');
        $('#viewList').removeClass('hidden');
        $('.view-map-img').addClass('hidden');
        $('.view-list-img').removeClass('hidden');
        togleMap = true;

    } else {
        $('.list-map').empty();
        $('.list-map').append(listHtml);
        $('#viewMap').removeClass('hidden');
        $('#viewList').addClass('hidden');
        $('.view-map-img').removeClass('hidden');
        $('.view-list-img').addClass('hidden');

        togleMap = false;

    }
    $('.btn').removeClass('active-btn');
    return false

})

// function for send form and link to appointment
$('#send-btn').on('click', function() {
    
    typeWrapper.forEach(element => {

        element.dataset.id === 'appointment-wrapper' ? element.classList.remove('type-wrapper-hidden') : element.classList.add('type-wrapper-hidden');
    })

    $('.widget-stepper').addClass('stepper-hidden');
    $('.book-appointment').removeClass('appointment-hidden');
})

// function from libriary for calendar
$(function () {
    $("#demo-calendar-apppearance").zabuto_calendar({
      header_format: '[year], [month]',
      week_starts: 'sunday',
      show_days: true,
      today_markup: '<span class="badge bg-primary">[day]</span>',
      navigation_markup: {
          prev: '<img class="left-btn" src="./assets/images/left-btn.svg" alt="left">',
          next: '<img class="left-btn" src="./assets/images/right-btn.svg" alt="left">'
        }
    });
  });

  $('#demo-calendar-apppearance').on('zabuto:calendar:day', function (event) {

    const dayOfMonts = $('.zabuto-calendar__day').removeClass('click-day')
    $(event.target).addClass('click-day');
});

// FUNCTIONS for confirm or decline book appointment

$('.no-btn').on('click', function(){
    $('.book-appointment').addClass('appointment-hidden');
    $('#block-without-appointmennt').removeClass('success-hidden')
})



$('.appointment-btn').on('click', function(){
    $('.book-appointment').addClass('appointment-hidden');
    $('#block-with-appointmennt').removeClass('success-hidden')
})

