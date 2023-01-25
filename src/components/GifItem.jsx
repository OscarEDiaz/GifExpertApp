import PropTypes from 'prop-types';

export const GifItem = ({title, url, id, onDeletePressed}) => {
    const deletePressed = () => {
        onDeletePressed(id);
    }

    return (
        <div className="card">
            <button onClick={deletePressed} className='delete-btn'>Delete</button>
            <img src={url} alt={title} />
            <p>{title}</p>
        </div>
    )
}

GifItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
}