import React, { Component } from 'react'
import {searchMovie, fetchMovies, setLoading} from '../../actions/searchAction'
import {connect} from 'react-redux'
export class searchForm extends Component {

    onChange = e => {
        this.props.searchMovie(e.target.value)
    }

    onSubmit = e => {
        e.preventDefault()
        this.props.fetchMovies(this.props.text)
        this.props.setLoading();
    }

    render() {
        return (
            <div className='jumbotron jumbotron-fluid mt-5 text-center'>
                <div className='container'>
                    <h2 className='display-4 mb-3'>
                        <i className='fa fa-search'/> search for Movie, TV serials ..
                    </h2>
                    <form id='searchForm' onSubmit={this.onSubmit}>
                        <input type='text' placeholder='search for Movie, TV serials ..' className='form-control' name='searchText' onChange={this.onChange}/>
                        <button type='submit' className='btn btn-primary btn-bg mt-3'>Search</button>
                    </form>
                </div>
                
            </div>
        )
    }
}

const mapStateToProps = state =>({
 text: state.movies.text
})

export default connect(mapStateToProps, {searchMovie, fetchMovies, setLoading})(searchForm)
