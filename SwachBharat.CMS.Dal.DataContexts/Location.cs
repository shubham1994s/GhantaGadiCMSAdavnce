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
    
    public partial class Location
    {
        public int locId { get; set; }
        public Nullable<int> userId { get; set; }
        public Nullable<System.DateTime> datetime { get; set; }
        public string lat { get; set; }
        public string @long { get; set; }
        public string address { get; set; }
        public string area { get; set; }
        public Nullable<int> type { get; set; }
        public string batteryStatus { get; set; }
        public Nullable<decimal> Distnace { get; set; }
        public Nullable<System.DateTime> CreatedDate { get; set; }
        public Nullable<bool> IsOffline { get; set; }
        public string ReferanceID { get; set; }
        public string RFIDTagId { get; set; }
        public string RFIDReaderId { get; set; }
        public Nullable<int> SourceId { get; set; }
    }
}
