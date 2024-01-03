// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract VaccineCertificateStorage {
    
    struct VaccineCertificate {
        uint256 id;
        address issuer;
        address owner;
        string vaccineType;
        uint256 dateOfVaccination;
        uint256 dosage;
        bool isValid;
    }

    VaccineCertificate[] public vaccineCertificates;
    mapping(address => uint256[]) public ownerCertificates;

    event CertificateCreated(uint256 indexed id, address indexed issuer, address indexed owner);

    function getCertificates() public view returns (VaccineCertificate[] memory) {
        return vaccineCertificates;
    }

    function issueCertificate(address _to, string memory _vaccineType, uint256 _dateOfVaccination, uint256 _dosage) public returns (uint256) {
        uint256 newId = vaccineCertificates.length;

        VaccineCertificate memory newCertificate = VaccineCertificate({
            id: newId,
            issuer: msg.sender,
            owner: _to,
            vaccineType: _vaccineType,
            dateOfVaccination: _dateOfVaccination,
            dosage: _dosage,
            isValid: true
        });

        vaccineCertificates.push(newCertificate);
        ownerCertificates[_to].push(newId);

        emit CertificateCreated(newId, msg.sender, _to);

        return newId;
    }

    function getVaccineCertificate(uint256 _id) public view returns (VaccineCertificate memory) {
        require(_id < vaccineCertificates.length, "Invalid certificate ID");
        return vaccineCertificates[_id];
    }

    function validateCertificate(uint256 _id) public view returns (VaccineCertificate memory) {
        require(_id < vaccineCertificates.length, "Invalid certificate ID");
        return vaccineCertificates[_id];
    }

    function invalidateCertificate(uint256 _id) public {
        require(_id < vaccineCertificates.length, "Invalid certificate ID");
        require(msg.sender == vaccineCertificates[_id].issuer, "You are not the issuer of this certificate");

        vaccineCertificates[_id].isValid = false;
    }

    function getOwnerCertificates(address _owner) public view returns (uint256[] memory) {
        return ownerCertificates[_owner];
    }
}
