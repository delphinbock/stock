// SCSS
import "../styles/scss/companies.scss";

const Companies = () => {
  return (
    <>
      <div className="custom-container">
        <h1>Companies</h1>
        <table className="table table-responsive">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Symbol</th>
              <th scope="col">Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Alibaba Group Holding Limited</td>
              <td>BABA</td>
              <td>100.60</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Bank of America Corporation</td>
              <td>BAC</td>
              <td>40.95</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Barclays PLC</td>
              <td>BCS</td>
              <td>8.38</td>
            </tr>
            <tr>
              <td>4</td>
              <td>KE Holdings Inc</td>
              <td>BEKE</td>
              <td>14.50</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Companies;
