import React from 'react'
import PropTypes from 'prop-types'

const ProfileSelector = (props) => {
  const uuid = Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1)

  const handleChange = e => {
    e.target.name = props.name
    props.onChangeHandler(e)
  }

  return (
    <div className='d-sm-inline-flex'>
      <div className='d-sm-none'>
        <select
          className='custom-select'
          name={props.name + uuid}
          value={props.value}
          onChange={handleChange}
        >
          <option value='fixed'>Fixed</option>
          <option value='auto'>Interval</option>
          <option value='diurnal'>Diurnal</option>
          <option value='random'>Random</option>
          <option value='sine'>Sine</option>
          <option value='lunar'>Lunar</option>
        </select>
      </div>
      <div className='btn-group  d-none d-sm-inline'>
        <label className='btn btn-secondary'>
          <input
            type='radio' value='fixed'
            className='mr-1'
            checked={props.value === 'fixed'}
            name={props.name + uuid}
            id={props.name + uuid + '-fixed'}
            onChange={handleChange}
            disabled={props.readOnly}
          />
          Fixed
        </label>
        <label className='btn btn-secondary'>
          <input
            type='radio' value='interval'
            className='mr-1'
            checked={props.value === 'interval'}
            name={props.name + uuid}
            id={props.name + uuid + '-interval'}
            onChange={handleChange}
            disabled={props.readOnly}
          />
          Interval
        </label>
        <label className='btn btn-secondary'>
          <input
            type='radio' value='diurnal'
            className='mr-1'
            checked={props.value === 'diurnal'}
            name={props.name + uuid}
            id={props.name + uuid + '-diurnal'}
            onChange={handleChange}
            disabled={props.readOnly}
          />
          Diurnal
        </label>
        <label className='btn btn-secondary'>
          <input
            type='radio' value='random'
            className='mr-1'
            checked={props.value === 'random'}
            name={props.name + uuid}
            id={props.name + uuid + '-random'}
            onChange={handleChange}
            disabled={props.readOnly}
          />
          Random
        </label>
        <label className='btn btn-secondary'>
          <input
            type='radio' value='sine'
            className='mr-1'
            checked={props.value === 'sine'}
            name={props.name + uuid}
            id={props.name + uuid + '-sine'}
            onChange={handleChange}
            disabled={props.readOnly}
          />
          Sine
        </label>
        <label className='btn btn-secondary'>
          <input
            type='radio' value='lunar'
            className='mr-1'
            checked={props.value === 'lunar'}
            name={props.name + uuid}
            id={props.name + uuid + '-lunar'}
            onChange={handleChange}
            disabled={props.readOnly}
          />
          Lunar
        </label>
      </div>
    </div>
  )
}

ProfileSelector.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  onChangeHandler: PropTypes.func
}

export default ProfileSelector
