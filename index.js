const steps = document.querySelectorAll('.stepper-item');
const typeWrapper = document.querySelectorAll('.typeWrapper');
// const nextBtn = document.querySelector('.nextBtn');
// const prevBtn = document.querySelector('.prevBtn');
let activePrimary = false;
// console.log(typeWrapper);

const mapHtml = '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d5873.503522773722!2d-122.40700885535698!3d37.75875723485357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sua!4v1699547569699!5m2!1sen!2sua"  height="450" style="border:0; width:100%;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';

const listHtml = `<div class="row align-items-center row-cols-lg-3 g-lg-4 row-cols-md-2 row-cols-sm-1 g-md-4 g-sm-3 g-2">
<div class="col ">
    <div class="item-card border rounded d-flex justify-content-lg-start align-items-center flex-column overflow-hidden">
       <div class="store-img">
           <img src="./assets/images/stores/store1.png" alt="store1">
       </div>
       <div class="store-name">
           <h5>Store name</h5>
       </div>
       <div class="store-zip">
           <p>8961 North Blackburn Ave.Milton, MA 02186</p>
       </div>
       <div class="btn">
           <button type="button" class=" btn btn-primary px-4 py-2">View</button>
       </div>
    </div>
</div>
<div class="col ">
    <div class="item-card border rounded d-flex justify-content-lg-start align-items-center flex-column overflow-hidden">
        <div class="store-img">
            <img src="./assets/images/stores/store2.png" alt="store2">
        </div>
        <div class="store-name">
            <h5>Store name</h5>
        </div>
        <div class="store-zip">
            <p>8961 North Blackburn Ave.Milton, MA 02186</p>
        </div>
        <div class="btn">
            <button type="button" class=" btn btn-primary px-4 py-2">View</button>
        </div>
    </div>
</div>
<div class="col ">
    <div class="item-card border rounded d-flex justify-content-lg-start align-items-center flex-column overflow-hidden">
        <div class="store-img">
            <img src="./assets/images/stores/store3.png" alt="store3">
        </div>
        <div class="store-name">
            <h5>Store name</h5>
        </div>
        <div class="store-zip">
            <p>8961 North Blackburn Ave.Milton, MA 02186</p>
        </div>
        <div class="btn">
            <button type="button" class=" btn btn-primary px-4 py-2">View</button>
        </div>
    </div>
</div>
<div class="col ">
    <div class="item-card border rounded d-flex justify-content-lg-start align-items-center flex-column overflow-hidden">
        <div class="store-img">
            <img src="./assets/images/stores/store4.png" alt="store4">
        </div>
        <div class="store-name">
            <h5>Store name</h5>
        </div>
        <div class="store-zip">
            <p>8961 North Blackburn Ave.Milton, MA 02186</p>
        </div>
        <div class="btn">
            <button type="button" class=" btn btn-primary px-4 py-2">View</button>
        </div>
    </div>
</div>
<div class="col ">
    <div class="item-card border rounded d-flex justify-content-lg-start align-items-center flex-column overflow-hidden">
       <div class="store-img">
           <img src="./assets/images/stores/store5.png" alt="store5">
       </div>
       <div class="store-name">
            <h5>Store name</h5>
        </div>
        <div class="store-zip">
            <p>8961 North Blackburn Ave.Milton, MA 02186</p>
        </div>
        <div class="btn">
            <button type="button" class=" btn btn-primary px-4 py-2">View</button>
        </div>
    </div>
</div>
<div class="col ">
    <div class="item-card border rounded d-flex justify-content-lg-start align-items-center flex-column overflow-hidden">
        <div class="store-img">
            <img src="./assets/images/stores/store6.png" alt="store6">
        </div>
        <div class="store-name">
            <h5>Store name</h5>
        </div>
        <div class="store-zip">
            <p>8961 North Blackburn Ave.Milton, MA 02186</p>
        </div>
        <div class="btn">
            <button type="button" class=" btn btn-primary px-4 py-2">View</button>
        </div>
    </div>
</div>
<div class="col ">
    <div class="item-card border rounded d-flex justify-content-lg-start align-items-center flex-column overflow-hidden">
        <div class="store-img">
            <img src="./assets/images/stores/store7.png" alt="store7">
        </div>
        <div class="store-name">
            <h5>Store name</h5>
        </div>
        <div class="store-zip">
            <p>8961 North Blackburn Ave.Milton, MA 02186</p>
        </div>
        <div class="btn">
            <button type="button" class=" btn btn-primary px-4 py-2">View</button>
        </div>
    </div>
</div>
<div class="col ">
    <div class="item-card border rounded d-flex justify-content-lg-start align-items-center flex-column overflow-hidden">
        <div class="store-img">
            <img src="./assets/images/stores/store8.png" alt="store8">
        </div>
        <div class="store-name">
            <h5>Store name</h5>
        </div>
        <div class="store-zip">
            <p>8961 North Blackburn Ave.Milton, MA 02186</p>
        </div>
        <div class="btn">
            <button type="button" class=" btn btn-primary px-4 py-2">View</button>
        </div>
    </div>
</div>
</div>`

let togleMap = true;


$(window).on('click', function(event) {
    console.log();
    let clickElem = event.target.closest('.item-card');
    const itemCard = document.querySelectorAll('.item-card');
    itemCard.forEach(element => {
        element.classList.remove('item-card-active');

        if (!event.target.id == 'send-btn' || activePrimary) {
            $('.btn').removeClass('active-btn');

            activePrimary = false;
        }

    })
//    console.log(clickElem);
    if(clickElem){
       clickElem.classList.add('item-card-active');
       $('.btn').addClass('active-btn');
       activePrimary = true;
    //    console.log(activePrimary);


    }
    // element.classList.remove('item-card-active');
    // console.log(activePrimary);
    return

})

$('.btn').on('click', function(event){
    // console.log(event.target.id);
    let id;

    if (activePrimary || !event.target.id == 'send-btn') {

        steps.forEach((element, index) => {

            // console.log(element.id);
            if (element.classList.contains('step-active')) {
                element.classList.replace('step-active', 'completed');
                // element.addClass('completed');
    
                id = Number(element.id) + 1;
        
            }
        })
        console.log(id);
        $(`#${id}`).addClass('step-active');
        typeWrapper.forEach(element => {
            if(Number(element.dataset.id) == id){
                element.classList.remove('type-wrapper-hidden');
            } else {
                element.classList.add('type-wrapper-hidden');
            }
            // console.log(element.id);
        })
    
    } else {
        // console.log('no');
    }

})

$('.list-map-btn').on('click', function(){


    if (!togleMap) {
        $('.list-map').empty();
        $('.list-map').append(mapHtml);
        togleMap = true;

    } else {
        $('.list-map').empty();
        $('.list-map').append(listHtml);
        togleMap = false;

    }
    // $('.list-map').append(listHtml || mapHtml);
    // console.log('click btn');
})


$('#send-btn').on('click', function() {
    $('.widget-stepper').addClass('stepper-hidden');
    $('.book-appointment').removeClass('appointment-hidden');
    $('.typeWrapper').removeClass('type-wrapper-hidden');
    console.log('click');
})

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
    console.log(event.target);
});


$('.no-btn').on('click', function(){
    $('.book-appointment').addClass('appointment-hidden');
    $('#block-without-appointmennt').removeClass('success-hidden')
    console.log('click no');
})



$('.appointment-btn').on('click', function(){
    $('.book-appointment').addClass('appointment-hidden');
    $('#block-with-appointmennt').removeClass('success-hidden')
    console.log('click book');
})