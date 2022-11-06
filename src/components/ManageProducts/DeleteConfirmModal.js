import React from 'react';

const DeleteConfirmModal = ({handleDelete,deletingProduct}) => {
    const {name,_id,group} = deletingProduct
    return (
        <>
            <input type="checkbox" id="delete-modal" className="modal-toggle" />
<div className="modal modal-middle">
  <div className="modal-box">
    <h3 className="font-bold text-lg">{name}</h3>
    <p className="py-4">Are you sure to delete the {name} product of group {group}</p>
    <div className="modal-action">
      <label htmlFor="delete-modal" onClick={()=>handleDelete(_id)} className="btn btn-error text-white">Delete</label>
      <label htmlFor="delete-modal" className="btn">Cancel</label>
    </div>
  </div>
</div>
        </>
    );
};

export default DeleteConfirmModal;