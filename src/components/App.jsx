import exampleVideoData from '/src/data/exampleVideoData.js';
import VideoList from './VideoList.js';
import Search from './Search.js';
import VideoPlayer from './VideoPlayer.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videoList: exampleVideoData,
      movie: exampleVideoData[0]
    };
  }

  onClick(videoClicked) {
    this.setState({
      movie: videoClicked
    });
  }

  render() {
    console.log(exampleVideoData);
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><Search /></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><VideoPlayer video={this.state.movie}/></div>
          </div>
          <div className="col-md-5">
            <div>
              <VideoList
                videos={this.state.videoList}
                onClick={this.onClick.bind(this)}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined



export default App;

