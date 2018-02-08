import React from 'react'
import PropTypes from 'prop-types'
import {Button} from 'material-ui'
import {CircularProgress} from 'material-ui/Progress'

import './loadingButton.css'

const LoadingButton = ({loadingStatus, handleClick, buttonClassName, children}) => {
  const isLoading = loadingStatus === 'loading'
  return (
    <div className="loading-button-wrap">
      <Button className={buttonClassName}
        raised
        fullWidth
        color="primary"
        disabled={loadingStatus === 'failed' || loadingStatus === 'completed'}
        onClick={handleClick}
      >
        {isLoading ? '' : children}
      </Button>
      {isLoading ? <CircularProgress size={24} className="loading-button-progress" /> : ''}
    </div>
  )
}

LoadingButton.propTypes = {
  loadingStatus: PropTypes.string.isRequired,
  buttonClassName: PropTypes.string,
  handleClick: PropTypes.func,
  children: PropTypes.string.isRequired,
}

export default LoadingButton