import React from 'react';
import { withRouter } from 'react-router-dom';

class ProductSearch extends React.Component{

    constructor(props){
        super(props);
        this.update = this.update.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            keyword: "",
            limit: 20,
            offset: 0
        }
    }

    update(e){
        this.setState({
            [e.currentTarget.name] : e.currentTarget.value
        })
    }

    handleSubmit(e){
        e.preventDefault();
        if( (e.currentTarget.name === "keyword" && e.key === "Enter")
         || e.currentTarget.name === "submit"){
            console.log(`Pressed Enter or Submit button`);
            const { keyword, limit, offset} = this.state;
            this.props.searchProduct(keyword, offset, limit);
         }

        
    }


    render(){

        let searchTextHolder = "Search product title"
        const { location } = this.props;
        if (!location.pathname.match(/^\/$/)){
          return null;
        }
        return(
            <div className="product-search-wrapper">
                <div className="product-search">
                    <input type="text" name="keyword" 
                        onChange={this.update} 
                        className="search-form__input" 
                        placeholder={searchTextHolder}
                    />
                    <button type="submit" name="submit" className="search-form__submit button" onClick={this.handleSubmit}>
                        <i className="fa fa-search" aria-hidden="true"></i>
                    </button>
                </div>
            </div>
        )


    }
}

export default withRouter(ProductSearch);