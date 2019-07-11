import React from 'react';
import {Modal} from '../../util/modal_util';
import {Link, Redirect} from 'react-router-dom';

class ProductForm extends React.Component {
  constructor(props){
    super(props);
    this.handleFile = this.handleFile.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.hideModal = this.hideModal.bind(this);

    this.state = 
      { product: this.props.product ? this.props.product :
        {
          title: '',
          description: '',
          header: '',
          link: '',
          header_img: '',
          publisher_id: props.currentUserId,
        },
        show: true
      };
  }

  handleFile(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = (e) => {
      // console.log(`file reader on load ended: ${JSON.stringify(e)}`);
      // console.log(`file: ${JSON.stringify(file)}`);
      let product = this.state.product;
      product["header_img"] = fileReader.result;
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

    console.log(`Current State: ${JSON.stringify(this.state)}`);
    const formData = new FormData();
    formData.append('product[title]', this.state.product.title);
    formData.append('product[header]', this.state.product.header);
    formData.append('product[link]', this.state.product.link);
    formData.append('product[description]', this.state.product.description);
    formData.append('product[header_img]', this.state.product.header_img);
    if(this.state.productId){
      formData.append('product[id]', this.state.product.id);
    }
    
    this.props.productId ? 
      this.props.updateProduct(formData) : 
      this.props.createProduct(formData);
  }

  update(e){
    let product = this.state.product;
    product[e.currentTarget.name] = e.target.value;
    this.setState({
      product: product
    });
  }

  componentDidUpdate(prevProps){
    // console.log(`this.props: ${JSON.stringify(this.props)}`);
    if (prevProps.products.show && prevProps.products.show != this.props.products.show) {
      this.setState({
        show: this.props.products.show
      });
    }

  }

  showModal() {
    this.setState({ show: true });
  }

  hideModal(e) {
    e.stopPropagation();
    this.setState({ show: false, errors: [] });
    this.props.history.goBack();
  }

  render() {
    const {title, description, header, link, header_img} = this.state.product;
    // const {show} = this.props.show;
    const preview = header_img ? 
      <img className="product-preview-img" src={header_img}></img> : null;

    // if (this.props.productId){

    // }else{

    // }

    return (

      <Modal show={this.props.products.show} handleClose={this.hideModal}>
        <div className="product-form-container">
          <h1>Create New Product Post</h1>
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
                <input type="file" className="new-product-button" name="header_img" onChange={this.handleFile.bind(this)}/>
              </div>

              <hr />

              <div className="button-holder">
                <input type="submit" value="Create Product" className="new-product-button" />
              </div>
              <div className="button-holder">
                <Link to="/">
                  <button className="new-product-button">Cancel</button>
                </Link>
              </div>

            </form>

          </div>
        </div>

      </Modal>
    )
  }



}


export default ProductForm;