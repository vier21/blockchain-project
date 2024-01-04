function CertificateCard({ value }) {
  console.log("Card" + value["dosage"]);
  return (
    <div
      key={value["id"]}
      className="max-w-sm bg-slate-600 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] p-5 rounded overflow-auto"
    >
      <div className="flex flex-col gap-3">
        <h3 className="text-sm text-white">ID : {value["id"].toString()}</h3>
        <h3 className="text-sm text-white">Issuer : {value["issuer"]}</h3>
        <h3 className="text-sm text-white">Owner :{value["owner"]}</h3>
        <h3 className="text-sm text-white">
          Vaccine Type :{value["vaccineType"]}
        </h3>
        <h3 className="text-sm text-white">
          Date :{value["dateOfVaccination"].toString()}
        </h3>
        <h3 className="text-sm text-white">
          Dosage : {value["dosage"].toString()}
        </h3>
        <h3 className="text-sm text-white">
          IsValid :{value["isValid"].toString()}
        </h3>
      </div>
    </div>
  );
}

export default CertificateCard;
