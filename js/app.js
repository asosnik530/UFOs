//import the data from data.js
const tableData=data;
//reference the HTML table using d3
var tbody= d3.select("tbody");
//first, clear out existing data
function buildTable(data) {
    tbody.html("");
//next loop through each object in data and append a row and cells for each value in the row
data.forEach((dataRow)) => {
    //append a row to table body
    let row=tbody.append("tr");
    //Loop through each field in dataRow and add each value as a table cell (td)
    Object.values(dataRow).forEach((val)=> {
    let cell = row.append("td");
    cell.text(val);
    }
  );
});
}