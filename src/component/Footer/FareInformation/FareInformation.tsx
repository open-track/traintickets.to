import {railcards} from "../../../config/railcards";
import * as React from "react";
import {Price} from "../../Price/Price";
import {FareUse} from "../../../service/JourneyPlanner/JourneyPlanner";
import autobind from "autobind-decorator";
import './FareInfo.css';

@autobind
export class FareInformation extends React.Component<FareInformationProps> {

  public render() {
    const id = this.props.fareOptionId;
    const fareOption = this.props.links[id];
    const fare = this.props.links[fareOption.fares[0].fare];

    return (
      <React.Fragment key={id}>
        <div className="row">
          <div className="col-md-18 offset-md-3">
            <div className="fare-info">
              <h4 className="fare-info--header">{fare.ticketType} (CODE)</h4>
              <div className="fare-info--body">
                <p>From <br/>{fare.origin}</p>
                <p>To <br/>{fare.destination}</p>
                <p>Route: {fare.route} (CODE)</p>
                <p>Valid for outward for 1 day, return within 1 month (TODO)</p>
                {fare.restriction && (<a target="_blank" href={"http://www.nationalrail.co.uk/" + fare.restriction}>Restrictions apply</a>)}
              </div>
              <div className="fare-info--footer">
                <p>Total: <Price value={fareOption.totalPrice} /></p>
              </div>
            </div>
            <div className="fare-info">
              <h4 className="fare-info--header">Price breakdown</h4>
              <div className="fare-info--body">
                <ul>
                  { fareOption.fares.map(this.renderTicketPrice) }
                </ul>
              </div>
              <div className="fare-info--footer">
                <p>Total: <Price value={fareOption.totalPrice} /></p>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }

  private renderTicketPrice(fareUse: FareUse, index: number) {
    const fare = this.props.links[fareUse.fare];
    const adults = fareUse.adults === 1 ? `${fareUse.adults} x adult` : fareUse.adults > 1 && `${fareUse.adults} x adults`;
    const children = fareUse.children === 1 ? `${fareUse.children} x child` : fareUse.children > 1 && `${fareUse.children} x children`;
    const railcard = fare.railcard && ` (${railcards[fare.railcard]})`;
    const comma = adults && children && ", ";

    return (
      <li className="clearfix" key={index}>
        {adults}{comma}{children} {railcard}<span className="pull-right"> at<Price value={fare.price} /></span>
      </li>
    )
  }
}

export interface FareInformationProps {
  links: any;
  fareOptionId: string;
}