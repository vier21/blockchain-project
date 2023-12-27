// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract CertificateStorage {
    
    struct Certificate {
        uint256 id;
        address issuer;
        address owner;
        string name;
        string issuerOrganization;
        uint256 date; 
        bool isValid;
    }

    Certificate[] public certificates;
    mapping(address => uint256[]) public ownerCertificates;

    event CertificateCreated(uint256 indexed id, address indexed issuer, address indexed owner);

    function getCertificates() public view returns (Certificate[] memory) {
        return certificates;
    }

    function issueCertificate(address _to, string memory _name, string memory _issuerOrganization) public returns (uint256) {
        uint256 newId = certificates.length;

        Certificate memory newCertificate = Certificate({
            id: newId,
            issuer: msg.sender,
            owner: _to,
            name: _name,
            issuerOrganization: _issuerOrganization,
            date: block.timestamp,
            isValid: true
        });

        certificates.push(newCertificate);
        ownerCertificates[_to].push(newId);

        emit CertificateCreated(newId, msg.sender, _to);

        return newId;
    }

    function validateCertificate(uint256 _id) public view returns (string memory) {
        require(_id < certificates.length, "Invalid certificate ID");
        
        if (certificates[_id].isValid) {
            return "Certificate is Valid";
        } else {
            return "Certificate is Invalid";
        }
    }

    function invalidateCertificate(uint256 _id) public {
        require(_id < certificates.length, "Invalid certificate ID");
        require(msg.sender == certificates[_id].issuer, "You are not the issuer of this certificate");

        certificates[_id].isValid = false;
    }

    function getOwnerCertificates(address _owner) public view returns (uint256[] memory) {
        return ownerCertificates[_owner];
    }
}
