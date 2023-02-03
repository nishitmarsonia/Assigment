import "./single.scss";
// import Sidebar from "../../components/sidebar/Sidebar";
// import Navbar from "../../components/navbar/Navbar";



const Single = () => {
  return (
    <div className="single">

      <div className="singleContainer">

        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">Diane cooper</h1>
                <div className="detailItem">
                  <span className="itemValue">dianecooper@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemValueF">15 |  02</span>
                  <h6 className="itemValue">past   |  upcoming</h6>
                </div>
                <div className="bottom">
                  <div
                    className="colorOption"
                    onClick={() => dispatch({ type: "LIGHT" })}
                  ></div>
                </div>
              </div>
            </div>
            <div className="right">
              {/* <Chart aspect={3 / 1} title="User Spending ( Last 6 Months)" /> */}
            </div>
          </div>
          <div className="bottom">
            <h1 className="title">Last Transactions</h1>
            {/* <List/> */}
          </div>
        </div>
      </div>
      );
};

      export default Single;
