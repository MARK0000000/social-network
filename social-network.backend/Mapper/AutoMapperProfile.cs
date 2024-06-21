using AutoMapper;
using social_network.backend.DTOs;
using social_network.backend.Entities;
using social_network.backend.Entities.Identity;
using social_network.backend.Entities.SignalR;

namespace social_network.backend.Mapper
{
    public class AutoMapperProfile : Profile
    {
        public AutoMapperProfile()
        {
            //CreateMap<AppUser, MemberDTO>()
            //    .ForMember(dest => dest.PhotoUrl, opt => opt.MapFrom(src => src.Photos.FirstOrDefault(x => x.IsMain).Url))
            //    .ForMember(dest => dest.Age, opt => opt.MapFrom(src => src.DateOfBirth.CalculateAge()));
            //CreateMap<Photo, PhotoDTO>();
            //CreateMap<MemberUpdateDTO, AppUser>();
            CreateMap<RegisterDTO, User>();
            CreateMap<Message, MessageDTO>();
            CreateMap<PostForCreateDTO, Post>();
            //CreateMap<Message, MessageDTO>()
            //    .ForMember(d => d.SenderPhotoUrl, o => o.MapFrom(s => s.Sender.Photos.FirstOrDefault(x => x.IsMain).Url))
            //    .ForMember(d => d.RecipientPhotoUrl, o => o.MapFrom(s => s.Recipient.Photos.FirstOrDefault(x => x.IsMain).Url));
            //CreateMap<DateTime, DateTime>().ConvertUsing(d => DateTime.SpecifyKind(d, DateTimeKind.Utc));
            //CreateMap<DateTime?, DateTime?>().ConvertUsing(d => d.HasValue ? DateTime.SpecifyKind(d.Value, DateTimeKind.Utc) : null);
        }
    }
}
