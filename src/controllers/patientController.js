import patientService from '../services/patientService';

let postAppointment = async (req, res) => {
    try {
        let infor = await patientService.postAppointment(req.body);
        return res.status(200).json(
            infor
        )
    } catch (e) {
        console.log(e)
        return res.status(200).json({
            errCode: -1,
            errMessage: 'Error form server'
        })
    }
}

module.exports = {
    postAppointment: postAppointment
}