import React from 'react';
import {Modal} from '../../util/modal_util';
import {Link, Redirect} from 'react-router-dom';
import Loading from '../../components/loading_icon';

class ProductForm extends React.Component {
  constructor(props){
    super(props);
    this.handleFile = this.handleFile.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.hideModal = this.hideModal.bind(this);

    this.state = { product: this.props.product };
  }
      
  handleFile(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = (e) => {
      // console.log(`file reader on load ended: ${JSON.stringify(e)}`);
      // console.log(`file: ${JSON.stringify(file)}`);
      let product = this.state.product;
      product["header_img"] = fileReader.result;

      // product["photo"] = fileReader.result;
      this.setState({ product: product, imageFile: fileReader.result });
    };
    if (file) {
      fileReader.readAsDataURL(file);
    }else {
      this.setState({ header_img: "", imageFile: null });
    }
  }


  handleSubmit(e){
    e.stopPropagation();
    e.preventDefault();

    this.props.productId ? 
      this.props.updateProduct(this.state.product) : 
      this.props.createProduct(this.state.product);
  }

  update(e){
    let product = this.state.product || {};
    product[e.currentTarget.name] = e.target.value;
    this.setState({
      product: product
    });
  }

  componentDidUpdate(prevProps){
    // console.log(`this.props: ${JSON.stringify(this.props)}`);
    if (prevProps.show !== this.props.products.show && !this.props.products.show){
      this.props.history.goBack();
    }

  }

  componentDidMount(){
    this.props.openProductForm();
  }

  showModal() {
    this.setState({ show: true });
  }

  hideModal(e) {
    e.stopPropagation();
    this.setState({ show: false, errors: [] });
    // this.props.closeProductForm();
    this.props.history.goBack();
  }

  render() {
    const {title, description, header, link, header_img} = this.state.product;
    // const {show} = this.props.show;
    const preview = header_img ? 
      <img className="product-preview-img" src={header_img}></img> : null;

    let buttonText = "Create Product";
    let formTitle = "Create New Product Post";
    if(this.props.productId){
      buttonText = "Update Product";
      formTitle = "Update Product Post";
    }


    return (

      <Modal show={this.props.products.show} handleClose={this.hideModal}>
        { this.props.loading ? 
          <Loading /> : 
        <div className="product-form-container">
          <h1>{formTitle}</h1>
          <div className="product-form-wrapper">
            <form onSubmit={this.handleSubmit} className="product-form">

              <label className="field">Title</label>
              <input type="text" className="field" name="title" onChange={this.update} value={title}/>

              <label className="field">Header</label>
              <input type="text" className="field" name="header" onChange={this.update} value={header}/>

              <label className="field">Link</label>
              <input type="text" className="field" name="link" onChange={this.update} value={link}/>
              
              <label className="field">Description</label>
              <textarea name="description" onChange={this.update} value={description}></textarea>

              <hr />

              <div className="button-holder">
                <h3>Image Preview</h3>
                {preview}
                <h3>Add Header Image</h3>
                <input type="file" className="add-image-button" name="header_img" onChange={this.handleFile.bind(this)}/>
              </div>

              <hr />

              <div className="button-holder">
                <input type="submit" value={buttonText} className="new-product-button" />
              </div>
              <div className="button-holder">
                <Link to="/">
                  <button className="new-product-button">Cancel</button>
                </Link>
              </div>

            </form>

          </div>
        </div>
        }

      </Modal>
    )
  }



}


export default ProductForm;