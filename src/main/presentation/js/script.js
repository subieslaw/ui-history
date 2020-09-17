$(document).ready(function () {
    const HistoryElement = ({ year, title, img, description, gistUrl, id, position }) => `
    <div class="container ${position}">
      <div class="content">
        <h2>${year}</h2>
        <h4>${title}</h4>
        <p> <img src="${img}" width="64" height="64" /> 
            <pre>    
                ${description}
            </pre>    
        </p>
        <div>
            <a href="${gistUrl}">https://gist.github.com/...</a>
        </div>
      </div>
    </div>
  `;

    $('.timeline').html([
        {   year: 'Welcome everyone !'
            , title: 'Quick history of UI Framework and internet'
            , gistUrl: 'https://gist.github.com/subieslaw/3c24d18b43380de8d3c3ece9ca082b3f'
            , img: 'http://pixelartmaker.com/art/d7397d2f0e2df12.png'
            , description: 'We will start here ...'
            , position: 'right'},
        { year: '1990ish', title: 'Foo item', gistUrl: 'https://gist.github.com/subieslaw/3c24d18b43380de8d3c3ece9ca082b3f', img: 'http://pixelartmaker.com/art/d7397d2f0e2df12.png' },
      ].map(HistoryElement).join(''));

      $("button").click(function (x) {
        $("#" + this.nextElementSibling.id).fadeToggle(500);
    });

});