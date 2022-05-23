import { Card } from "./Card";

function Body() {
 
  return (
    <div className="container">
      <h1>body</h1>
      <Card/>
      {/* Iterate over data and show `Card` here */}
    </div>
  );
}

export { Body };
