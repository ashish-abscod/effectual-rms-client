
export default function UploadFiles({formData, setFormData}) {

    return (
        <>
            <div className="col-md-12">
                <label>Upload File:
                    <input type="file" multiple className="form-control" onChange={(e) => setFormData( {...formData, ChooseFile : e.target.files[0]} )}   />
                </label>
                <span className="ms-3">Selected File : {formData.ChooseFile?.name}</span>
            </div>
            <div className="col-md-12 mt-3">
                <label className='w-100'>Useful information for search
                    <textarea type="text" className="form-control" style={{ minHeight: "14rem" }} id="info" placeholder='Type Something here...' value={formData.UsefulInformationForSearch} onChange={(e) => setFormData({ ...formData, UsefulInformationForSearch: e.target.value })} />
                </label>
            </div>
        </>
    )
}
