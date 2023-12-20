// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract CertiicateStorage {

  struct Cert {
    uint256 id;
    string Issuer;
    string Owner;
  }

  Cert[] public Certs;

  function getCertificates() public view returns (Cert[] memory) {
    return Certs;
  }

  function inputCert(string memory _issuer, string memory _owner) public returns (string memory) {
        Cert memory newCert = Cert({
            id: Certs.length,
            Issuer: _issuer,
            Owner: _owner
        });

        Certs.push(newCert);

        string memory msgId = string(abi.encodePacked("Id Certificate with number ", toString(newCert.id)));

        return msgId;
    }


  function validateCert(uint256 _id) public view returns (string memory){
    bool cek = false;
    for(uint256 i = 0; i < Certs.length;i++){
      if (Certs[i].id == _id){
        cek = true;
      }
    }

    if(cek){
      return "Data Validated";
    }else{
      return "Data Missing";
    }
  }

   function toString(uint256 value) internal pure returns (string memory) {
        if (value == 0) {
            return "0";
        }
        uint256 temp = value;
        uint256 digits;
        while (temp != 0) {
            digits++;
            temp /= 10;
        }
        bytes memory buffer = new bytes(digits);
        while (value != 0) {
            digits -= 1;
            buffer[digits] = bytes1(uint8(48 + (value % 10)));
            value /= 10;
        }
        return string(buffer);
    }

}
