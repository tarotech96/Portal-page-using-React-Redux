
import React, { Component } from "react";
// import Toggle from "react-toggle";

// import imagine1 from "assets/img/taro_oppa.jpg";
// import imagine2 from "assets/img/jisoo3.jpg";
// import imagine3 from "assets/img/jisoo4.jpg";
// import imagine4 from "assets/img/jisoo5.jpg";

class FixedPlugin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      classes: "dropdown show-dropdown open",
      bg_checked: true,
      bgImage: this.props.bgImage
    };
  }
  handleClick = () => {
    this.props.handleFixedClick();
  };
  onChangeClick = () => {
    this.props.handleHasImage(!this.state.bg_checked);
    this.setState({ bg_checked: !this.state.bg_checked });
  };
  render() {
    return (
      // <div className="fixed-plugin">
      //   <div id="fixedPluginClasses" className={this.props.fixedClasses}>
      //     <div onClick={this.handleClick}>
      //       <i className="fa fa-cog fa-2x" />
      //     </div>
      //     <ul className="dropdown-menu">
      //       <li className="header-title">Taro Oppa</li>
      //       <li className="adjustments-line">
      //         <p className="pull-left">Image</p>
      //         <div className="pull-right">
      //           <Toggle
      //             defaultChecked={this.state.bg_checked}
      //             onChange={this.onChangeClick}
      //           />
      //         </div>
      //         <div className="clearfix" />
      //       </li>
      //       <li className="adjustments-line">
      //         <a href="https://github.com/tarotech96" className="switch-trigger">
      //           <p>Colors</p>
      //           <div className="pull-right">
      //             <span
      //               className={
      //                 this.props.bgColor === "black"
      //                   ? "badge filter active"
      //                   : "badge filter"
      //               }
      //               data-color="black"
      //               onClick={() => {
      //                 this.props.handleColorClick("black");
      //               }}
      //             />
      //             <span
      //               className={
      //                 this.props.bgColor === "azure"
      //                   ? "badge filter badge-azure active"
      //                   : "badge filter badge-azure"
      //               }
      //               data-color="azure"
      //               onClick={() => {
      //                 this.props.handleColorClick("azure");
      //               }}
      //             />
      //             <span
      //               className={
      //                 this.props.bgColor === "green"
      //                   ? "badge filter badge-green active"
      //                   : "badge filter badge-green"
      //               }
      //               data-color="green"
      //               onClick={() => {
      //                 this.props.handleColorClick("green");
      //               }}
      //             />
      //             <span
      //               className={
      //                 this.props.bgColor === "orange"
      //                   ? "badge filter badge-orange active"
      //                   : "badge filter badge-orange"
      //               }
      //               data-color="orange"
      //               onClick={() => {
      //                 this.props.handleColorClick("orange");
      //               }}
      //             />
      //             <span
      //               className={
      //                 this.props.bgColor === "red"
      //                   ? "badge filter badge-red active"
      //                   : "badge filter badge-red"
      //               }
      //               data-color="red"
      //               onClick={() => {
      //                 this.props.handleColorClick("red");
      //               }}
      //             />
      //             <span
      //               className={
      //                 this.props.bgColor === "purple"
      //                   ? "badge filter badge-purple active"
      //                   : "badge filter badge-purple"
      //               }
      //               data-color="purple"
      //               onClick={() => {
      //                 this.props.handleColorClick("purple");
      //               }}
      //             />
      //           </div>
      //           <div className="clearfix" />
      //         </a>
      //       </li>
      //       <li className="header-title">Logo</li>
      //       <li className={this.state["bgImage"] === imagine1 ? "active" : ""}>
      //         <a href="https://github.com/tarotech96"
      //           className="img-holder switch-trigger"
      //           onClick={() => {
      //             this.setState({ bgImage: imagine1 });
      //             this.props.handleImageClick(imagine1);
      //           }}
      //         >
      //           <img src={imagine1} alt="..." />
      //         </a>
      //       </li>
      //       <li className={this.state["bgImage"] === imagine2 ? "active" : ""}>
      //         <a href="https://github.com/tarotech96"
      //           className="img-holder switch-trigger"
      //           onClick={() => {
      //             this.setState({ bgImage: imagine2 });
      //             this.props.handleImageClick(imagine2);
      //           }}
      //         >
      //           <img src={imagine2} alt="..." />
      //         </a>
      //       </li>
      //       <li className={this.state["bgImage"] === imagine3 ? "active" : ""}>
      //         <a href="https://github.com/tarotech96"
      //           className="img-holder switch-trigger"
      //           onClick={() => {
      //             this.setState({ bgImage: imagine3 });
      //             this.props.handleImageClick(imagine3);
      //           }}
      //         >
      //           <img src={imagine3} alt="..." />
      //         </a>
      //       </li>
      //       <li className={this.state["bgImage"] === imagine4 ? "active" : ""}>
      //         <a href="https://github.com/tarotech96"
      //           className="img-holder switch-trigger"
      //           onClick={() => {
      //             this.setState({ bgImage: imagine4 });
      //             this.props.handleImageClick(imagine4);
      //           }}
      //         >
      //           <img src={imagine4} alt="..." />
      //         </a>
      //       </li>

      //       <li className="button-container">
      //         <div className="">
      //           {/* <a
      //             href="https://www.creative-tim.com/product/light-bootstrap-dashboard-react?ref=lbdr-fixed-plugin"
      //             target="_blank"
      //             className="btn btn-success btn-block btn-fill"
      //           >
      //             Download free!
      //           </a> */}
      //         </div>
      //       </li>
      //     </ul>
      //   </div>
      // </div>
      <div></div>
    );
  }
}

export default FixedPlugin;
