/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import "./App.css";

export default function App() {
  const problemStyle = {
    backgroundColor: "#F8D7DA",
    color: "#721C24",
    padding: "10px",
    marginBottom: "10px",
  };

  const solutionStyle = {
    backgroundColor: "#D4EDDA",
    color: "#155724",
    padding: "10px",
    marginBottom: "20px",
  };

  const [timeRemaining, setTimeRemaining] = React.useState(60);
  const [fontSize, setFontSize] = React.useState(16);

  const increaseFontSize = () => {
    setFontSize((prevFontSize) => prevFontSize + 2);
  };

  const decreaseFontSize = () => {
    setFontSize((prevFontSize) => prevFontSize - 2);
  };

  React.useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="App" style={{ fontSize: `${fontSize}px` }}>
      <header>
        <h1 style={{ fontFamily: "Courgette, cursive" }}>
          Accessibility Workshop
        </h1>
      </header>
      <main>
        <section>
          <h2>Keyboard Navigation</h2>
          <p>
            Affected users: People with mobility impairments who rely on
            keyboards or other assistive technologies.
          </p>
          <div style={problemStyle}>
            <p>Problem: Non-focusable custom button</p>
            <div
              onClick={() => alert("Clicked!")}
              className="custom-button"
              tabIndex="-1"
            >
              Inaccessible Button
            </div>
          </div>
          <div style={solutionStyle}>
            <p>Solution: Accessible button using the &lt;button&gt; element</p>
            <button onClick={() => alert("Clicked!")} className="custom-button">
              Accessible Button
            </button>
          </div>

          <h2>Color Contrast</h2>
          <p>
            Affected users: People with visual impairments, including color
            blindness.
          </p>
          <div style={problemStyle}>
            <p>Problem: Low contrast text</p>
            <div style={{ backgroundColor: "#CCCCCC", color: "#FFFFFF" }}>
              Low Contrast Text
            </div>
          </div>
          <div style={solutionStyle}>
            <p>Solution: High contrast text</p>
            <div style={{ backgroundColor: "#2D2D2D", color: "#FFFFFF" }}>
              High Contrast Text
            </div>
          </div>

          <h2>Alternative Text for Images</h2>
          <p>
            Affected users: People with visual impairments who rely on screen
            readers.
          </p>
          <div style={problemStyle}>
            <p>Problem: Image without alt text</p>
            <img src="example-image.jpg" style={{ width: "100px" }} />
          </div>
          <div style={solutionStyle}>
            <p>Solution: Image with descriptive alt text</p>
            <img
              src="example-image.jpg"
              alt="A description of the image content"
              style={{ width: "100px" }}
            />
          </div>

          <h2>Inaccessible Forms</h2>
          <p>
            Affected users: People with visual impairments or cognitive
            disabilities who rely on screen readers or other assistive
            technologies.
          </p>
          <div style={problemStyle}>
            <p>Problem: Form without proper markup</p>
            <form>
              <input type="text" name="name" placeholder="Tony Stark" />
              <button type="submit">Submit</button>
            </form>
          </div>
          <div style={solutionStyle}>
            <p>Solution: Form with proper HTML markup</p>
            <form>
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" required />
              <button type="submit">Submit</button>
            </form>
          </div>

          <h2>Headings and Landmarks</h2>
          <p>
            Affected users: People with visual impairments, cognitive
            disabilities, or learning disabilities who rely on screen readers or
            other assistive technologies to navigate content.
          </p>
          <div style={problemStyle}>
            <p>Problem: Non-semantic markup and headings</p>
            <div>
              <h3>Main Content</h3>
              <div>
                <h4>Subsection</h4>
              </div>
            </div>
          </div>
          <div style={solutionStyle}>
            <p>Solution: Semantic markup and hierarchical headings</p>
            <main>
              <h2>Main Content</h2>
              <section>
                <h3>Subsection</h3>
              </section>
            </main>
          </div>
          <h2>Time-based Content</h2>
          <p>
            Affected users: People with disabilities who may require additional
            time to read or interact with content.
          </p>
          <div style={problemStyle}>
            <p>
              Problem: Content with a time limit and no option to extend or
              adjust
            </p>
            <div>
              Time remaining: {timeRemaining} seconds
              {/* Add your time-sensitive content or interaction here */}
            </div>
          </div>
          <div style={solutionStyle}>
            <p>
              Solution: Content with options to extend, adjust, or disable the
              time limit
            </p>
            <div>
              Time remaining: {timeRemaining} seconds
              <button onClick={() => setTimeRemaining(timeRemaining + 30)}>
                Extend time by 30 seconds
              </button>
              {/* Add your time-sensitive content or interaction here */}
            </div>
          </div>
          <h2>Descriptive Link Text</h2>
          <p>
            Affected users: People with visual impairments, cognitive
            disabilities, or learning disabilities who rely on screen readers or
            other assistive technologies to navigate content.
          </p>
          <div style={problemStyle}>
            <p>Problem: Non-descriptive link text</p>
            <p>
              To learn more about web accessibility,{" "}
              <a href="https://www.example.com">click here</a>.
            </p>
          </div>
          <div style={solutionStyle}>
            <p>Solution: Descriptive and meaningful link text</p>
            <p>
              Learn more about web accessibility by reading our{" "}
              <a href="https://www.example.com">comprehensive guide</a>.
            </p>
          </div>
          <h2>Adjustable Font Sizes</h2>
          <p>Affected users: People with visual impairments</p>
          <div style={problemStyle}>
            <p>Problem: Font too small to read</p>
            <p>
              The quick brown fox jumps over a lazy dog is the most famous
              pangram in English, that is the most short sentence in which all
              the 26 letters of the alphabet are used.
            </p>
          </div>
          <div style={solutionStyle}>
            <p>
              Solution: Provide the user the option to increase or decrease font
              size
            </p>
            <p>
              <button
                style={{ fontSize: `${fontSize}px` }}
                onClick={increaseFontSize}
              >
                Increase Font Size
              </button>
              <button
                style={{ fontSize: `${fontSize}px` }}
                onClick={decreaseFontSize}
              >
                Decrease Font Size
              </button>
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
