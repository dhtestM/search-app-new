import React from 'react';
import Switch from '@material-ui/core/Switch';

class SearchApiSwitch extends React.Component {

  render() {
  console.log(this.props.checked)
    return (
      <div>
        <Switch
          checked={this.props.checked}
          onChange={this.props.clickHandler(this.props.checked)}
          value="checkedA"
        />
      </div>
    );
  }
}

export default SearchApiSwitch;