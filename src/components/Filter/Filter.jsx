import React from 'react';
import PropTypes from 'prop-types';
import css from './Filter.module.css';

class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.onFilterChange(event.currentTarget.value);
  }

  render() {
    const { filter } = this.props;
    return (
      <label>
        Find contacts by name
        <input
          className={css.filterInput}
          type="text"
          name="filter"
          value={filter}
          onChange={this.handleChange}
          placeholder="Search contacts"
        />
      </label>
    );
  }
}

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
};

export default Filter;
