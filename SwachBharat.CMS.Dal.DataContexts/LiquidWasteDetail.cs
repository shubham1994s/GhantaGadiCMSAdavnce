//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace SwachBharat.CMS.Dal.DataContexts
{
    using System;
    using System.Collections.Generic;
    
    public partial class LiquidWasteDetail
    {
        public int LWId { get; set; }
        public string LWName { get; set; }
        public string LWNameMar { get; set; }
        public string LWLat { get; set; }
        public string LWLong { get; set; }
        public string LWQRCode { get; set; }
        public Nullable<int> zoneId { get; set; }
        public Nullable<int> wardId { get; set; }
        public Nullable<int> areaId { get; set; }
        public string ReferanceId { get; set; }
        public string LWAddreLW { get; set; }
        public Nullable<System.DateTime> lastModifiedDate { get; set; }
        public Nullable<int> userId { get; set; }
    }
}
