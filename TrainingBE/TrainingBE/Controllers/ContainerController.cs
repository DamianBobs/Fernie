using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using static TrainingBE.Model.CWModels;

namespace TrainingBE.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ContainerController : ControllerBase
    {
        [HttpGet]
        [Route("containerList")]
        public List<Container> GetDemoContainerList()
        {
            List<Container> containerList = new List<Container>();
            Container demoContainer = new Container();
            demoContainer.id = "e9c443b8-cc6d-4bd8-a1e8-dcff17499dd8";
            demoContainer.containerNumber = "HMMU6277266";
            demoContainer.status = "Empty Returned";
            demoContainer.etd = "2021-01-24";
            demoContainer.eta = "2021-03-29";
            demoContainer.origin = "Manila, Philippines";
            demoContainer.destination = "Grand Prairie, United States";
            demoContainer.consignee = "HAND - VEUM";
            demoContainer.masterAirWayBill = "(EWU) - BHHNZ";

            demoContainer.shippingLegs = new List<ShippingLeg>
        {
            new ShippingLeg
            {
                    legOrder= 1,
                    atd= "2021-01-24",
                    ata= "2021-03-29",
                    location= "Manila, Philippines"
                },

            new ShippingLeg
            {
                legOrder= 2,
                atd= "2021-01-27",
                ata= null,
                location= "Kaohsiung, Taiwan"
            },

            new ShippingLeg
            {
                legOrder= 3,
                atd= "2021-04-15",
                ata= null,
                location= "Los Angeles, United States"
            }
        };

            containerList.Add(demoContainer);
            containerList.Add(demoContainer);
            containerList.Add(demoContainer);
            containerList.Add(demoContainer);

            return containerList;
        }
    }
}
