

'using strict';
//import React from "react";
//import ReactDOM from "react-dom"; 



class Home extends React.Component {
  render() {
    return (
      <div className="main-content-home">
        <h2><strong>Front End Course Directory</strong></h2>
        <p>This fun directory is a project for the <em>React Router Basics</em> course on Treehouse.</p>
        <p>Learn front end web development and much more! This simple directory app offers a preview of our course
					library. Choose from many hours of content, from HTML to CSS to JavaScript. Learn to code and get the
					skills you need to launch a new career in front end web development.</p>
        <p>We have thousands of videos created by expert teachers on web design and front end development. Our
					library is continually refreshed with the latest on web technology so you will never fall behind.</p>
        <hr />

      </div>
    );
  }
}

class About extends React.Component {
  render() {
    return (
      <div className="main-content">
        <h2><strong>About</strong></h2>
        <p>The front end course directory lists many of the courses we teach on HTML, CSS, JavaScript and more! Be sure to
					visit the Teachers section to view a list of our talented teachers. Or visit the Courses section and select a
					topic -- HTML, CSS, or JavaScript -- to see a list of our courses.</p>
      </div>
    );
  }
}

class Teachers extends React.Component {
  render() {
    return (
      <div className="container">
        <h2><strong>Teachers</strong></h2>
        <div className="row">
          <div className="col-sm-6">
            <img className="teacher-img" src="http://treehouse-code-samples.s3.amazonaws.com/bootstrap-4/img/angie.png" />
            <h3><strong>Angie McAngular</strong></h3>
            <p>Angie is a web developer and teacher who is passionate
              about building scalable, data driven web apps, especially
              ones that address old problems with new tech!</p>
          </div>
          <div className="col-sm-6">
            <img className="teacher-img" src="http://treehouse-code-samples.s3.amazonaws.com/bootstrap-4/img/nodestradamus.png" />
            <h3><strong>NodeStradamus</strong></h3>
            <p>'NodeStra' is a software engineer and philosopher trying to leave
         the world better than he found it. He codes for non-profits, eCommerce,
         and large-scale web apps.</p>
          </div>
          <div className="col-sm-6">
            <img className="teacher-img" src="http://treehouse-code-samples.s3.amazonaws.com/bootstrap-4/img/geo.png" />
            <h3><strong>Geo 'Lo' Cation</strong></h3>
            <p>Geo is a JavaScript developer working on large-scale
        applications. He's also a teacher who strives to support
        students in removing all barriers to learning code.</p>
          </div>
          <div className="col-sm-6">
            <img className="teacher-img" src="http://treehouse-code-samples.s3.amazonaws.com/bootstrap-4/img/ecma.png" />
            <h3><strong>Ecma Scriptnstuff</strong></h3>
            <p>Ecma found her passion for computers and programming over 15 years ago. She
        is excited to introduce people to the wonderful world of JavaScript..</p>
          </div>
          <div className="col-sm-6 col-m-6">
            <img className="teacher-img" src="http://treehouse-code-samples.s3.amazonaws.com/bootstrap-4/img/jay.png" />
            <h3><strong>Jay Query</strong></h3>
            <p>Jay is a developer, author of CSS: The Missing Manual,
         JavaScript & jQuery: The Missing Manual, and web development teacher.</p>
          </div>
          <div className="col-sm-6 col-md-6">
            <img className="teacher-img" src="http://treehouse-code-samples.s3.amazonaws.com/bootstrap-4/img/json.png" />
            <h3><strong>Jason Babel</strong></h3>
            <p className="text-justify">All of his professional life, Json has worked with
        computers online; he is a polyglot programmer and likes
         using the right tools for the job.</p>
          </div>
        </div>
      </div>

    );
  }
}

class Repos extends React.Component {
  render() {
    const { route } = this.props;
    let CurrentList = null;
    switch (route) {

      case 'css':
        CurrentList = ['How to Make a CSS', 'HTML CSS'].map((item, index) => {
          return <li key={index}> {item} </li>
        });
        break;
      case 'javascript':
        CurrentList = ['How to Make a JS', 'HTML JS'].map((item, index) => {
          return <li key={index}> {item} </li>
        });
        break;
      default: //'html'
        CurrentList = ['', 'HTML Forms'].map((item, index) => {
          return <li key={index}> {item} </li>
        });
        break;
    }
    return (
      <div className="main-content courses">
        <div className="course-header group">
          <h2>Courses</h2>
          <ul className="course-nav col-sm-6">
            <li><a href='#/repos/html'>HTML</a></li>
            <li><a href='#/repos/css'>CSS</a></li>
            <li><a href='#/repos/javascript'>JavaScript</a></li>
          </ul>

          <ul>
            {CurrentList}
          </ul>
        </div>

        {/* Write routes here... */}
      </div>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      route: window.location.hash.substr(1)
    };
  }
  //  $(document).ready ()
  componentDidMount() {
    window.addEventListener('hashchange', () => {
      //<a href="#/about">About</a>
      //<li><a href='#/repos/html'>HTML</a></li>
      console.log(window.location.hash.substr(1));

      this.setState({
        route: window.location.hash.substr(1)
      });
    });
  }
  render() {
    let Child;
    let propsForRepos = null;
    switch (this.state.route) {
      case '/home':
        Child = Home;
        break;
      case '/about':
        Child = About;
        break;
      case '/teachers':
        Child = Teachers;
        break;
      case '/repos':
        Child = Repos;
        break;
      case '/repos/html':
        Child = Repos;
        propsForRepos = 'html';
        break;
      case '/repos/css':
        Child = Repos;
        propsForRepos = 'css';
        break;
      case '/repos/javascript':
        Child = Repos;
        propsForRepos = 'javascript';
        break;
      default:
        Child = Home;
    }
    return (
      <div>
        <header>App</header>{' '}
        <menu >
          <ul className="text-right">
            <li>
              <a href="#/home">Home</a>

            </li>{''}
            <li>
              <a href="#/about">About</a>
            </li>{' '}
            <li>
              <a href="#/teachers">Teachers</a>
            </li>{' '}
            <li>
              <a href="#/repos">Courses</a>
            </li>
          </ul>{' '}
        </menu>
        {
          propsForRepos ?
            <Child route={propsForRepos} />
            :
            <Child />
        }
      </div>
    );
  }
}

ReactDOM.render(<App />,
  document.getElementById("container"));


//export default App;
