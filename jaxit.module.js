export function createJaxit() {
  return new Jaxit();
}

function createJaxitAnimation(jaxitobj) {
  return new AnimationJaxit(jaxitobj);
}

class Jaxit {
  constructor() {
    this.jaxconsole;

    this.colors = {
      red: '#FF0000',
      lightgreen: '#00FF00',
      blue: '#0000FF',
      white: '#FFFFFF',
      gray: '#A4A4A4',
      green: '#088A08',
      purple: '#8904B1',
      pink: '#DF01D7',
      yellow: '#FFFF00',
      lightblue: '#2E9AFE',
      yellowgreen: '#C8FE2E',
      cyan: '#2EFEF7',
      teal: '#01DFA5',
      hotpink: '#FE2EF7'
    }
  }

  init() {
    this.jaxconsole = document.createElement('div');
    document.body.appendChild(this.jaxconsole);
  }

  print(text, color='white') {
    if (true) {
      this.jaxconsole.innerHTML += '<span style="color: ' + color + '"> ' + text + '<br></span>'
    } else if (false) {
      this.jaxconsole.innerHTML += '<span style="color: ' + color + '"> ' + text + '</span>'
    }
  }

  slowprint(text, duration, color_='white', callback) { 
    let i = 0;
    let txt = text;
    let speed = duration;
    let color = color_;
    let console_ = this.jaxconsole;
    typeWriter();

    function print_(text_, color='white') {
      console_.innerHTML += '<span style="color: ' + color + '">' + text_ + '</span>'
    }
    
    function typeWriter() {
      if (i < txt.length) {
        print_(txt.charAt(i), color);
        i++;
        setTimeout(typeWriter, speed);
      } else {
        print_('</br>');
        if (typeof callback == "function") {
          callback();
        }
      }
    }
  }

  delay(function_, duration) {
    setTimeout(() => {
      function_();
    }, duration * 1000);
  }

  changeConsoleFont(newfont) {
    this.jaxconsole.style.fontFamily = newfont;
  }

  changeConsoleColor(newbgcolor) {
    this.jaxconsole.style.backgroundColor = newbgcolor; 
  }

  changeConsoleColorGradient(arrofcolors, type, direction) {
    if (type == 'linear') {
      this.jaxconsole.style.backgroundImage = 'linear-gradient(' + direction + ',' + arrofcolors.join(",") +')';
    } else if (type == 'radial') {
      this.jaxconsole.style.backgroundImage = 'radial-gradient(' + arrofcolors.join(",") +') ';
    }
  }

  changeLocation(location) {
    if (location == 'top') {
      this.jaxconsole.style.top = '0px';
      this.jaxconsole.style.left = '0px';
      this.jaxconsole.style.width = "100%";
      this.jaxconsole.style.height = "50%";
    } else if (location == 'right') {
      this.jaxconsole.style.top = '0px';
      this.jaxconsole.style.right = '0px';
      this.jaxconsole.style.width = "50%";
      this.jaxconsole.style.height = "100%";
    } else if (location == 'left') {
      this.jaxconsole.style.top = '0px';
      this.jaxconsole.style.left = '0px';
      this.jaxconsole.style.width = "50%";
      this.jaxconsole.style.height = "100%";
    } else if (location == 'bottom') {
      this.jaxconsole.style.bottom = '50%';
      this.jaxconsole.style.left = '0px';
      this.jaxconsole.style.width = "100%";
      this.jaxconsole.style.height = "50%";
    } else if (location == 'fullscreen') {
      this.jaxconsole.style.top = '0px';
      this.jaxconsole.style.left = '0px';
      this.jaxconsole.style.width = "100%";
      this.jaxconsole.style.height = "100%";
    } else {
      console.warn('Jaxit doesn\'t understand the location you have put in.')
    }
  }

  scan(text, color='white', usercolor='white', int=false, callback) {
    let usertxt = 'hello';
    this.print(text, true, color);
    let userResArea = document.createElement('div');
    userResArea.contentEditable = 'true';
    userResArea.autofocus = 'true';
    userResArea.style.color = usercolor;
    //userResArea.style.border = "1px solid white;"
    userResArea.className = 'jaxconsole-scan';
    userResArea.style.width = '100%';
    this.jaxconsole.appendChild(userResArea);

    userResArea.addEventListener('keypress', (e) => {
      if (e.keyCode == 13) {
        e.preventDefault();
        usertxt = userResArea.innerHTML;
        userResArea.contentEditable = 'false';

        if (!int) {
          if (typeof callback == "function") {
            callback(usertxt);
          }
        } else if (int) {
          if (typeof callback == "function") {
            callback(parseInt(usertxt));
          }
        }
      }
    });
    
  }

  clear() {
    this.jaxconsole.innerHTML = '';
  }

  defaultStyle() {
    this.jaxconsole.style.backgroundColor = 'black';
    this.jaxconsole.style.position = 'fixed';
    this.jaxconsole.style.top = '0px';
    this.jaxconsole.style.right = '0px';
    this.jaxconsole.style.width = "50%";
    this.jaxconsole.style.height = "100%";
    this.jaxconsole.style.fontFamily = 'monospace';
    this.jaxconsole.style.padding = '5px';
  }
}
