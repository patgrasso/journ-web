


export function load(done) {
  var jquery = document.createElement('script');

  jquery.src = 'https://code.jquery.com/jquery-2.2.2.min.js';
  jquery.onload = jquery.onreadystatechange = () => {
    done(window.$);
  };
  document.body.appendChild(jquery);
}

