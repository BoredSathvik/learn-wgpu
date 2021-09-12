(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{237:function(e,t,a){e.exports=a.p+"assets/img/normal_mapping_correct.2731b486.png"},268:function(e,t,a){"use strict";a.r(t);var s=a(10),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"news"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#news"}},[e._v("#")]),e._v(" News")]),e._v(" "),s("h2",{attrs:{id:"_0-10-swapchain-is-dead-long-live-the-surface"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_0-10-swapchain-is-dead-long-live-the-surface"}},[e._v("#")]),e._v(" 0.10 SwapChain is dead, long live the Surface!")]),e._v(" "),s("p",[s("code",[e._v("SwapChain")]),e._v(" and all related code has been removed from wgpu. All code pertaining to obtaining textures to draw to from the window will be available from the "),s("code",[e._v("Surface")]),e._v(" instead. That means configuring "),s("code",[e._v("SurfaceTexture")]),e._v("s will look something like this:")]),e._v(" "),s("div",{staticClass:"language-rust extra-class"},[s("pre",{pre:!0,attrs:{class:"language-rust"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("let")]),e._v(" config "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[e._v("wgpu"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("::")])]),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("SurfaceConfiguration")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    usage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[e._v("wgpu"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("::")])]),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("TextureUsages")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("::")]),s("span",{pre:!0,attrs:{class:"token constant"}},[e._v("RENDER_ATTACHMENT")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    format"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" surface"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("get_preferred_format")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&")]),e._v("adapter"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("unwrap")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    width"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" size"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("width"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    height"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" size"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("height"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    present_mode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[e._v("wgpu"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("::")])]),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("PresentMode")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("::")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("Fifo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\nsurface"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("configure")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&")]),e._v("device"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&")]),e._v("config"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),s("p",[e._v("Resizing the surface will use similar code:")]),e._v(" "),s("div",{staticClass:"language-rust extra-class"},[s("pre",{pre:!0,attrs:{class:"language-rust"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("if")]),e._v(" new_size"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("width "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&&")]),e._v(" new_size"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("height "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("self")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("size "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" new_size"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("self")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("config"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("width "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" new_size"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("width"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("self")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("config"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("height "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" new_size"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("height"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("self")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("surface"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("configure")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("self")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("device"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("self")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("config"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),s("p",[e._v("Finally, getting a "),s("code",[e._v("SurfaceTexture")]),e._v(" to draw to will use the surface directly.")]),e._v(" "),s("div",{staticClass:"language-rust extra-class"},[s("pre",{pre:!0,attrs:{class:"language-rust"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("let")]),e._v(" output "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("self")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("surface"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("get_current_frame")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("?")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("output"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("let")]),e._v(" view "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" output\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("texture\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("create_view")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&")]),s("span",{pre:!0,attrs:{class:"token namespace"}},[e._v("wgpu"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("::")])]),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("TextureViewDescriptor")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("::")]),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("default")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),s("p",[e._v("The Pong and imgui examples are broken again. I may remove the imgui example as the corresponding crate already has examples on how to use it. I'm also considering reworking the Pong example, but I may end up just updating it.")]),e._v(" "),s("h2",{attrs:{id:"pong-and-imgui-demos-are-fixed"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pong-and-imgui-demos-are-fixed"}},[e._v("#")]),e._v(" Pong and imgui demos are fixed!")]),e._v(" "),s("p",[e._v("The "),s("code",[e._v("imgui_wgpu")]),e._v(" and "),s("code",[e._v("wgpu_glyph")]),e._v(" crates have been updated to "),s("code",[e._v("wgpu")]),e._v(" 0.8 so I was able to fixed the demos! They both still use GLSL, and I don't think I'll be changing that for now. I may switch them over to "),s("code",[e._v("naga")]),e._v(" at some point.")]),e._v(" "),s("h2",{attrs:{id:"_0-8-and-wgsl"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_0-8-and-wgsl"}},[e._v("#")]),e._v(" 0.8 and WGSL")]),e._v(" "),s("h3",{attrs:{id:"the-glsl-shaders-have-been-translated-to-wgsl"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#the-glsl-shaders-have-been-translated-to-wgsl"}},[e._v("#")]),e._v(" The GLSL shaders have been translated to WGSL")]),e._v(" "),s("p",[e._v("Originally I wanted to wait until the WGSL spec fully stabilized, but due to some issues with the GLSL code, I've decided to switch over the code now. While GLSL is supported by WebGPU, it's currently secondary to WGSL. I'll keep an example of how to use GLSL (and maybe add HLSL and Metal as well), but I'm going to use WGSL from now on.")]),e._v(" "),s("h3",{attrs:{id:"shaderc-has-been-removed"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#shaderc-has-been-removed"}},[e._v("#")]),e._v(" Shaderc has been removed")]),e._v(" "),s("p",[e._v("I've been thinking about doing this for a while now. Because shaderc is a c library, it often has to be redownloaded during builds. This has been slowing down my ability to add new content and maintain old content. I had been considering switching to naga earlier, but some of my shaders (notably the lighting ones) weren't compiling with naga as I was using features not available for compatibility reasons ("),s("code",[e._v("inverse")]),e._v(" is not available in all languages targeting spirv).")]),e._v(" "),s("p",[e._v("Since I needed to make a bunch of changes to the code base to make the glsl, and because I wanted to switch the tutorial to WGSL anyways, I decided to bite the bullet and recode everything in WGSL and remove shaderc from the tutorials.")]),e._v(" "),s("h3",{attrs:{id:"some-of-the-showcase-examples-are-broken"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#some-of-the-showcase-examples-are-broken"}},[e._v("#")]),e._v(" Some of the showcase examples are broken")]),e._v(" "),s("p",[e._v("The "),s("code",[e._v("wgpu_glyph")]),e._v(", and "),s("code",[e._v("imgui-wgpu")]),e._v(" crates currently depend on "),s("code",[e._v("wgpu")]),e._v(" 0.7, which is causing the "),s("code",[e._v("pong")]),e._v(" and "),s("code",[e._v("imgui-demo")]),e._v(" to not compile. I decided to excluded them from the workspace until the underlying crates update to using "),s("code",[e._v("wgpu")]),e._v(" 0.8. (Feel free to submit a issue or even PR when that happens!)")]),e._v(" "),s("h3",{attrs:{id:"various-api-changes"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#various-api-changes"}},[e._v("#")]),e._v(" Various API changes")]),e._v(" "),s("ul",[s("li",[e._v("The "),s("code",[e._v("depth")]),e._v(" field is now "),s("code",[e._v("depth_or_array_layers")])]),e._v(" "),s("li",[s("code",[e._v("wgpu::VertexFormat::Float3")]),e._v(" is now "),s("code",[e._v("wgpu::VertexFormat::Float32x3")]),e._v(". Similar things apply to "),s("code",[e._v("Float2")]),e._v(" and "),s("code",[e._v("Float4")])]),e._v(" "),s("li",[s("code",[e._v("CullMode")]),e._v(" is no longer a thing, instead "),s("code",[e._v("PrimitiveState::cull_mode")]),e._v(" will require an "),s("code",[e._v("Option<Face>")])]),e._v(" "),s("li",[e._v("Added "),s("code",[e._v("clamp_depth")]),e._v(" and "),s("code",[e._v("conservative")]),e._v(" to "),s("code",[e._v("PrimitiveState")]),e._v(". Part of this means that "),s("code",[e._v("DepthStencilState")]),e._v(" no longer has a "),s("code",[e._v("clamp_depth")]),e._v(" field.")]),e._v(" "),s("li",[s("code",[e._v("color_blend")]),e._v(" and "),s("code",[e._v("alpha_blend")]),e._v(" have been moved into the new "),s("code",[e._v("blend")]),e._v(" field with accepts an "),s("code",[e._v("Option<wgpu::BlendState>")])]),e._v(" "),s("li",[s("code",[e._v("adapter.get_preferred_format()")]),e._v(" now returns an "),s("code",[e._v("Option<wgpu::TextureFormat>")])]),e._v(" "),s("li",[s("code",[e._v("wgpu::RenderPassColorAttachmentDescriptor")]),e._v(" has been renamed "),s("code",[e._v("wgpu::RenderPassColorAttachement")]),e._v(" and the "),s("code",[e._v("attachment")]),e._v(" field has been renamed to "),s("code",[e._v("view")])]),e._v(" "),s("li",[s("code",[e._v("wgpu::RenderPassDepthStencialAttachmentDescriptor")]),e._v(" also loses the "),s("code",[e._v("Descriptor")]),e._v(" part of it's name. "),s("code",[e._v("attachment")]),e._v(" gets renamed to "),s("code",[e._v("view")]),e._v(" as well.")]),e._v(" "),s("li",[s("code",[e._v("wgpu::TextureCopyView")]),e._v(" has been renamed to "),s("code",[e._v("wgpu::ImageCopyTexture")]),e._v(". This is a typedef for "),s("code",[e._v("wgpu::ImageCopyTextureBase<T>")])]),e._v(" "),s("li",[s("code",[e._v("wgpu::TextureDataLayout")]),e._v(" is now "),s("code",[e._v("wgpu::ImageDataLayout")]),e._v(" and it's "),s("code",[e._v("bytes_per_row")]),e._v(" and "),s("code",[e._v("rows_per_image")]),e._v(" now take "),s("code",[e._v("NonZeroU32")]),e._v(".")]),e._v(" "),s("li",[s("code",[e._v("wgpu::ImageCopyBuffer")]),e._v(" is now "),s("code",[e._v("wgpu::ImageCopyBuffer")]),e._v(".")])]),e._v(" "),s("h2",{attrs:{id:"_0-7"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_0-7"}},[e._v("#")]),e._v(" 0.7")]),e._v(" "),s("p",[e._v("There were a lot of changes particularly to the "),s("code",[e._v("RenderPipelineDescriptor")]),e._v(". Most other things have not changed. You can check out the "),s("a",{attrs:{href:"https://github.com/sotrh/learn-wgpu/pull/140",target:"_blank",rel:"noopener noreferrer"}},[e._v("0.9 PR"),s("OutboundLink")],1),e._v(" for the full details.")]),e._v(" "),s("h2",{attrs:{id:"november-2020-cleanup-content-freeze-and-patreon"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#november-2020-cleanup-content-freeze-and-patreon"}},[e._v("#")]),e._v(" November 2020 Cleanup, Content Freeze, and Patreon")]),e._v(" "),s("p",[e._v("School is starting to ramp up, so I haven't had as much time to work on the site as I would like to. Because of that there were some issues piling up. I decided to tackle a bunch of them in one go. Here's a snapshot of what I did:")]),e._v(" "),s("ul",[s("li",[e._v("The tutorial now handles "),s("code",[e._v("SurfaceError")]),e._v(" properly")]),e._v(" "),s("li",[e._v("I'm now using bytemuck's derive feature on all buffer data structs.")]),e._v(" "),s("li",[e._v("The "),s("a",{attrs:{href:"../beginner/tutorial7-instancing"}},[e._v("instancing tutorial")]),e._v(" now uses vertex buffers instead of storage buffers.")]),e._v(" "),s("li",[s("code",[e._v("build.rs")]),e._v(" now updates when individual shaders are changed, not whenever "),s("code",[e._v("/src")]),e._v(" is changed.")]),e._v(" "),s("li",[e._v("Had some help from Github user @kanerogers to clean up the "),s("a",{attrs:{href:"../beginner/tutorial5-textures"}},[e._v("texturing tutorial")]),e._v(".")]),e._v(" "),s("li",[e._v("I made a "),s("a",{attrs:{href:"../showcase/compute"}},[e._v("compute pipeline showcase")]),e._v(" that computes the tangent and bitangent for each vertex in a model.")]),e._v(" "),s("li",[e._v("I made a "),s("a",{attrs:{href:"../showcase/imgui-demo"}},[e._v("imgui showcase")]),e._v(". It's very basic, but it should be a good starting point.")])]),e._v(" "),s("p",[e._v('Now in the headline I mentioned a "Content Freeze". Wgpu is still a moving target. The migration from '),s("code",[e._v("0.4")]),e._v(" to "),s("code",[e._v("0.5")]),e._v(" was lot of work. The same goes for "),s("code",[e._v("0.5")]),e._v(" to "),s("code",[e._v("0.6")]),e._v(". I'm expected the next migration to be just as much work. As such, I won't be added much content until the API becomes a bit more stable. That being said, I still plan on resolving any issues with the content.")]),e._v(" "),s("p",[e._v("One more thing. This is actually quite awkward for me (especially since I'll be slowing down development), but I've started a "),s("a",{attrs:{href:"https://www.patreon.com/sotrh",target:"_blank",rel:"noopener noreferrer"}},[e._v("patreon"),s("OutboundLink")],1),e._v(". My job doesn't give me a ton of hours, so things are a bit tight. You are by no means obligated to donate, but I would appreciate it.")]),e._v(" "),s("p",[e._v("You can find out more about contributing to this project on the "),s("RouterLink",{attrs:{to:"/#contribution-and-support"}},[e._v("introduction page")])],1),e._v(" "),s("h2",{attrs:{id:"_0-6"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_0-6"}},[e._v("#")]),e._v(" 0.6")]),e._v(" "),s("p",[e._v("This took me way too long. The changes weren't difficult, but I had to do a lot of copy pasting. The main changes are using "),s("code",[e._v("queue.write_buffer()")]),e._v(" and "),s("code",[e._v("queue.write_texture()")]),e._v(" everywhere. I won't get into the nitty gritty, but you can checkout the "),s("a",{attrs:{href:"https://github.com/sotrh/learn-wgpu/pull/90",target:"_blank",rel:"noopener noreferrer"}},[e._v("pull request"),s("OutboundLink")],1),e._v(" if you're interested.")]),e._v(" "),s("h2",{attrs:{id:"added-pong-showcase"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#added-pong-showcase"}},[e._v("#")]),e._v(" Added Pong Showcase")]),e._v(" "),s("p",[s("RouterLink",{attrs:{to:"/showcase/pong/"}},[e._v("See it here")])],1),e._v(" "),s("h2",{attrs:{id:"normal-mapping"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#normal-mapping"}},[e._v("#")]),e._v(" Normal mapping")]),e._v(" "),s("p",[e._v('My perfectionism got in my way a bit with this one. I wasn\'t sure that what I was getting was "physically accurate", but it seems to look good.')]),e._v(" "),s("p",[s("img",{attrs:{src:a(237),alt:""}})]),e._v(" "),s("h2",{attrs:{id:"_0-5"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_0-5"}},[e._v("#")]),e._v(" 0.5!")]),e._v(" "),s("p",[e._v("Too many things changed to make note of them here. Check out "),s("a",{attrs:{href:"https://github.com/sotrh/learn-wgpu/pull/29",target:"_blank",rel:"noopener noreferrer"}},[e._v("the 0.5 pull request"),s("OutboundLink")],1),e._v(" if you're curious about specifics. That being said, 2 things are worth mentioning directly: the y-axis now points up like with DirectX and Metal, and requesting an adapter and creating a device now use "),s("code",[e._v("Future")]),e._v("s. The tutorials have been updated as well as the code.")]),e._v(" "),s("h2",{attrs:{id:"reworked-lighting-tutorial"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#reworked-lighting-tutorial"}},[e._v("#")]),e._v(" Reworked lighting tutorial")]),e._v(" "),s("p",[e._v("The "),s("RouterLink",{attrs:{to:"/intermediate/tutorial10-lighting/"}},[e._v("lighting tutorial")]),e._v(" was not up to par, so I redid it.")],1),e._v(" "),s("h2",{attrs:{id:"added-gif-showcase"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#added-gif-showcase"}},[e._v("#")]),e._v(" Added GIF showcase")]),e._v(" "),s("p",[s("RouterLink",{attrs:{to:"/showcase/gifs/"}},[e._v("Creating GIFs")])],1),e._v(" "),s("h2",{attrs:{id:"updated-texture-tutorials"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#updated-texture-tutorials"}},[e._v("#")]),e._v(" Updated texture tutorials")]),e._v(" "),s("p",[e._v("Up to this point, we created textures manually everytime. I've pulled out the texture creation code into a new "),s("code",[e._v("texture.rs")]),e._v(" file and included it every tutorial from the "),s("RouterLink",{attrs:{to:"/beginner/tutorial5-textures/#cleaning-things-up"}},[e._v("textures tutorial")]),e._v(" onward.")],1),e._v(" "),s("h2",{attrs:{id:"fixed-panics-do-to-not-specifying-the-correct-usage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fixed-panics-do-to-not-specifying-the-correct-usage"}},[e._v("#")]),e._v(" Fixed panics do to not specifying the correct "),s("code",[e._v("usage")])]),e._v(" "),s("p",[e._v("Wgpu has become more strict about what "),s("code",[e._v("BufferUsages")]),e._v("s and "),s("code",[e._v("TextureUsages")]),e._v("s are required when performing certain operations. For example int the "),s("RouterLink",{attrs:{to:"/intermediate/windowless/"}},[e._v("Wgpu without a window example")]),e._v(", the "),s("code",[e._v("texture_desc")]),e._v(" only specified the usage to by "),s("code",[e._v("COPY_SRC")]),e._v(". This caused a crash when the "),s("code",[e._v("texture")]),e._v(" was used as a render target. Adding "),s("code",[e._v("OUTPUT_ATTACHMENT")]),e._v(" fixed the issue.")],1),e._v(" "),s("h2",{attrs:{id:"updating-winit-from-0-20-0-alpha5-to-0-20"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#updating-winit-from-0-20-0-alpha5-to-0-20"}},[e._v("#")]),e._v(" Updating Winit from 0.20.0-alpha5 to 0.20")]),e._v(" "),s("p",[e._v("There were a lot of small changes to how the dpi stuff works. You can see all the changes "),s("a",{attrs:{href:"https://github.com/rust-windowing/winit/blob/master/CHANGELOG.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("in the changelog"),s("OutboundLink")],1),e._v(". That means that some of the tutorials had to change.")]),e._v(" "),s("ul",[s("li",[e._v("I've removed "),s("code",[e._v("hidpi_factor")]),e._v(" from "),s("code",[e._v("State")]),e._v(" entirely. They removed the "),s("code",[e._v("hidpi_factor()")]),e._v(" method from "),s("code",[e._v("winit::window::Window")]),e._v(", and changed "),s("code",[e._v("inner_size()")]),e._v(" to return "),s("code",[e._v("PhysicalSize")]),e._v(" instead of "),s("code",[e._v("LogicalSize")]),e._v(", so we don't need to store the "),s("code",[e._v("hidpi_factor")]),e._v(" anymore.")]),e._v(" "),s("li",[s("code",[e._v("update_hidpi_and_resize")]),e._v(" is no more. Since "),s("code",[e._v("ScaleFactorChanged")]),e._v(" passes in the windows new "),s("code",[e._v("PhysicalSize")]),e._v(", we can simply use "),s("code",[e._v("resize()")]),e._v(".")]),e._v(" "),s("li",[s("code",[e._v("State::size")]),e._v(" is now "),s("code",[e._v("PhysicalSize<u32>")]),e._v(" instead of the pre 0.20 "),s("code",[e._v("LogicalSize")]),e._v(".")]),e._v(" "),s("li",[s("code",[e._v("EventsCleared")]),e._v(" is now "),s("code",[e._v("MainEventsCleared")]),e._v(".")])]),e._v(" "),s("p",[e._v("I may have missed a change, but I made sure that all the examples compile an run, so if you have trouble with your code you can use them as a reference.")]),e._v(" "),s("h2",{attrs:{id:"changed-tutorial-examples-to-use-a-src-directory"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#changed-tutorial-examples-to-use-a-src-directory"}},[e._v("#")]),e._v(" Changed tutorial examples to use a src directory")]),e._v(" "),s("p",[e._v("I wasn't using the traditional cargo binary folder setup. I've changed it to the standardized form now.")]),e._v(" "),s("h2",{attrs:{id:"updating-to-0-4-from-0-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#updating-to-0-4-from-0-3"}},[e._v("#")]),e._v(" Updating to 0.4 from 0.3")]),e._v(" "),s("p",[e._v("There are a few things that have changed:")]),e._v(" "),s("ol",[s("li",[e._v("The use of "),s("code",[e._v("Instance")]),e._v(" has been removed. Creating a "),s("code",[e._v("Surface")]),e._v(" and requesting an "),s("code",[e._v("Adapter")]),e._v(" are done as follows.")])]),e._v(" "),s("div",{staticClass:"language-rust extra-class"},[s("pre",{pre:!0,attrs:{class:"language-rust"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("let")]),e._v(" surface "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[e._v("wgpu"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("::")])]),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("Surface")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("::")]),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("create")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("let")]),e._v(" adapter "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[e._v("wgpu"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("::")])]),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("Adapter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("::")]),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("request")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&")]),s("span",{pre:!0,attrs:{class:"token namespace"}},[e._v("wgpu"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("::")])]),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("RequestAdapterOptions")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("Default")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("::")]),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("default")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("unwrap")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// needs to be unwrapped")]),e._v("\n")])])]),s("ol",{attrs:{start:"2"}},[s("li",[e._v("The "),s("code",[e._v("request_device")]),e._v(" method now returns a "),s("code",[e._v("(Device, Queue)")]),e._v(" tuple. This means that you can borrow the "),s("code",[e._v("Queue")]),e._v(" mutably while using the "),s("code",[e._v("Device")]),e._v(" immutably. Because of this change, submitting "),s("code",[e._v("CommandBuffer")]),e._v("s to the queue uses the "),s("code",[e._v("submit")]),e._v(" method on the "),s("code",[e._v("Queue")]),e._v(" directly.")])]),e._v(" "),s("div",{staticClass:"language-rust extra-class"},[s("pre",{pre:!0,attrs:{class:"language-rust"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("self")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("queue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("submit")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("\n    encoder"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("finish")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),s("ol",{attrs:{start:"3"}},[s("li",[e._v("The "),s("code",[e._v("create")]),e._v(" method on "),s("code",[e._v("Surface")]),e._v(" takes in any struct that implements the "),s("code",[e._v("HasRawWindow")]),e._v(" trait, instead of a "),s("code",[e._v("RawWindowHandle")]),e._v(". This means that the "),s("code",[e._v('raw-window-handle = "0.3"')]),e._v(" line in "),s("code",[e._v("Cargo.toml")]),e._v(" is no longer needed.")])]),e._v(" "),s("p",[e._v("I don't know if this is a change from 0.4, but you use "),s("code",[e._v('wgpu = "0.4"')]),e._v(" line in dependencies instead of the "),s("code",[e._v("[dependencies.wgpu]")]),e._v(" as wgpu will determine the best back end for you.")]),e._v(" "),s("h2",{attrs:{id:"new-recent-articles"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#new-recent-articles"}},[e._v("#")]),e._v(" New/Recent Articles")]),e._v(" "),s("RecentArticles")],1)}),[],!1,null,null,null);t.default=n.exports}}]);