using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TrainingBE.Model
{
    public static class CWModels
    {
        public class Container
        {
            public string id { get; set; }
            public string containerNumber { get; set; }
            public string status { get; set; }
            public string etd { get; set; }
            public string eta { get; set; }
            public string origin { get; set; }
            public string destination { get; set; }
            public List<ShippingLeg> shippingLegs { get; set; }
            public string consignee { get; set; }
            public string masterAirWayBill { get; set; }

        }

        public class ShippingLeg
        {
            public int legOrder { get; set; }
            public string atd { get; set; }
            public string ata { get; set; }
            public string location { get; set; }
        }



    }
}
