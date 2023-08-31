import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineEye } from "react-icons/ai";

const MyOrders = () => {
  const arr = [1, 2, 3, 4];

  return (
    <section className="tableClass">
      <main>
        <table>
          <thead>
            <tr>
              <th>Numero de commande</th>
              <th>Status</th>
              <th>Quantité</th>
              <th>Montant</th>
              <th>Moyen de paiement </th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
          {arr.map((i) => (
            <tr key={i}>
              <td>#sdkfsdfdsf</td>
              <td>En cours de traitement</td>
              <td>23</td>
              <td>${2132}</td>
              <td>CB</td>
              <td>
              <Link to={`/order/${"asdsidds"}`}>
                <AiOutlineEye />
              </Link>
              </td>
            </tr>
            ))}
           
           
          </tbody>
        </table>
      </main>
    </section>
  );
};

export default MyOrders;
