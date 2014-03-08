from django.conf.urls import patterns, include, url

from django.contrib import admin
admin.autodiscover()

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'djangular.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),

    url(r'^$', 'datavis.views.index'),
    url(r'^data/$', 'datavis.views.data'),
    url(r'^admin/', include(admin.site.urls)),
)
