<template>
  <!-- <section class="section pt-5 mt-4">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 p-0">
          <div class="card map border-0">
            <div class="card-body p-0">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin"
                style="border: 0"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container mt-100 mt-60">
      <div class="row align-items-center">
        <div
          class="col-lg-5 col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0 order-2 order-md-1"
        >
          <div class="card custom-form rounded shadow border-0">
            <div class="card-body">
              <div id="message"></div>
              <form
                @submit.prevent="save"
                name="contact-form"
                id="contact-form"
              >
                <div class="row">
                  <div class="col-lg-6">
                    <div class="form-group">
                      <label
                        >Your Name <span class="text-danger">*</span></label
                      >
                      <div class="position-relative">
                        <i data-feather="user" class="fea icon-sm icons"></i>
                        <input
                          v-model.trim="contact.name"
                          name="name"
                          id="name"
                          type="text"
                          class="form-control"
                          placeholder="First Name"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="form-group">
                      <label
                        >Your Email <span class="text-danger">*</span></label
                      >
                      <div class="position-relative">
                        <i data-feather="mail" class="fea icon-sm icons"></i>
                        <input
                          v-model.trim="contact.email"
                          name="email"
                          id="email"
                          type="email"
                          class="form-control"
                          placeholder="Your email"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <div class="form-group">
                      <label>Comments</label>
                      <div class="position-relative">
                        <i
                          data-feather="message-circle"
                          class="fea icon-sm icons"
                        ></i>
                        <textarea
                          v-model.trim="contact.message"
                          name="comments"
                          id="comments"
                          rows="4"
                          class="form-control"
                          placeholder="Your Message"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm-12 text-center">
                    <button
                      @click="save"
                      type="submit"
                      id="submit"
                      name="send"
                      class="submitBnt btn btn-primary btn-block"
                      value="Send Message"
                    >Send</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div class="col-lg-7 col-md-6 order-1 order-md-2">
          <div class="title-heading ml-lg-4">
            <h4 class="mb-4">Contact Details</h4>
            <p class="text-muted">
              Start working with
              <span class="text-primary font-weight-bold">Landrick</span> that
              can provide everything you need to generate awareness, drive
              traffic, connect.
            </p>
            <div class="media contact-detail align-items-center mt-3">
              <div class="icon">
                <i data-feather="mail" class="fea icon-m-md text-dark mr-3"></i>
              </div>
              <div class="media-body content">
                <h5 class="title font-weight-bold mb-0">Email</h5>
                <a href="mailto:contact@example.com" class="text-primary"
                  >contact@example.com</a
                >
              </div>
            </div>

            <div class="media contact-detail align-items-center mt-3">
              <div class="icon">
                <i
                  data-feather="phone"
                  class="fea icon-m-md text-dark mr-3"
                ></i>
              </div>
              <div class="media-body content">
                <h5 class="title font-weight-bold mb-0">Phone</h5>
                <a href="tel:+152534-468-854" class="text-primary"
                  >+152 534-468-854</a
                >
              </div>
            </div>

            <div class="media contact-detail align-items-center mt-3">
              <div class="icon">
                <i
                  data-feather="map-pin"
                  class="fea icon-m-md text-dark mr-3"
                ></i>
              </div>
              <div class="media-body content">
                <h5 class="title font-weight-bold mb-0">Location</h5>
                <a
                  href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin"
                  class="video-play-icon text-primary"
                  >View on Google map</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section> -->
  <section id="wrapper">
    <div class="container">
      <div class="row">
        <div id="left-column" class="col-xs-12 col-sm-12 col-md-4 col-lg-3">
          <div class="contact-rich">
            <h4>Store information</h4>
            <div class="block">
              <div class="icon"><i class="material-icons"></i></div>
              <div class="data">Demo Shop<br />United States</div>
            </div>
            <hr />
            <div class="block">
              <div class="icon"><i class="material-icons"></i></div>
              <div class="data email">Email us:<br /></div>
              <a href="mailto:demo@demo.com">demo@demo.com</a>
            </div>
          </div>
        </div>

        <div
          id="content-wrapper"
          class="left-column col-xs-12 col-md-8 col-lg-9"
        >
          <section id="main">
            <section id="content" class="page-content card card-block">
              <section class="contact-form">
                <form>
                  <section class="form-fields">
                    <div class="form-group row">
                      <div class="col-md-9 col-md-offset-3">
                        <h3>Contact us</h3>
                      </div>
                    </div>

                    <div class="form-group row">
                      <label class="col-md-3 form-control-label">Subject</label>
                      <div class="col-md-6">
                        <select
                          name="id_contact"
                          class="form-control form-control-select"
                        >
                          <option value="2">Customer service</option>
                          <option value="1">Webmaster</option>
                        </select>
                      </div>
                    </div>

                    <div class="form-group row">
                      <label class="col-md-3 form-control-label"
                        >Email address</label
                      >
                      <div class="col-md-6">
                        <input
                          class="form-control"
                          name="from"
                          type="email"
                          value=""
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div class="form-group row">
                      <label class="col-md-3 form-control-label"
                        >Attachment</label
                      >
                      <div class="col-md-6">
                        <input
                          type="file"
                          name="fileUpload"
                          class="filestyle"
                          data-buttontext="Choose file"
                          id="filestyle-0"
                          tabindex="-1"
                        />
                        <div class="bootstrap-filestyle input-group">
                          <input
                            type="text"
                            class="form-control"
                            placeholder=""
                            disabled=""
                          />
                          <span
                            class="group-span-filestyle input-group-btn"
                            tabindex="0"
                            ><label for="filestyle-0" class="btn btn-default"
                              ><span
                                class="icon-span-filestyle glyphicon glyphicon-folder-open"
                              ></span>
                              <span class="buttonText">Choose file</span></label
                            ></span
                          >
                        </div>
                      </div>
                      <span class="col-md-3 form-control-comment">
                        optional
                      </span>
                    </div>

                    <div class="form-group row">
                      <label class="col-md-3 form-control-label">Message</label>
                      <div class="col-md-9">
                        <textarea
                          class="form-control"
                          name="message"
                          placeholder="How can we help?"
                          rows="3"
                        ></textarea>
                      </div>
                    </div>
                    <div class="form-group row">
                      <div class="offset-md-3 gdpr-contacts">
                        <div id="gdpr_consent" class="gdpr_module_1">
                          <span class="custom-checkbox">
                            <label class="psgdpr_consent_message">
                              <input
                                id="psgdpr_consent_checkbox_1"
                                name="psgdpr_consent_checkbox"
                                type="checkbox"
                                value="1"
                                class="psgdpr_consent_checkboxes_1"
                              />
                              <span
                                ><i
                                  class="material-icons rtl-no-flip checkbox-checked psgdpr_consent_icon"
                                  ></i
                                ></span
                              >
                              <span
                                >Enim quis fugiat consequat elit minim nisi eu
                                occaecat occaecat deserunt aliquip nisi ex
                                deserunt.</span
                              >
                            </label>
                          </span>
                        </div>
                      </div>
                    </div>
                  </section>

                  <footer class="form-footer text-sm-right">
                    <input
                      class="btn btn-primary"
                      type="submit"
                      name="submitMessage"
                      value="Send"
                      disabled="disabled"
                    />
                  </footer>
                </form>
              </section>
            </section>

            <footer class="page-footer">
              <!-- Footer content -->
            </footer>
          </section>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Vue, Component, Watch } from 'nuxt-property-decorator'
import { addContact } from '~/apollo/mutations/mutations'
type ContactDTO = {
  email: String
  name: String
  message: String
  created: String
}
@Component
export default class Contact extends Vue {
  public contact: ContactDTO = {
    email: '',
    name: '',
    message: '',
    created: ''
  }

  save() {
    return this.$apolloProvider!.defaultClient.mutate({
      variables: {
        email: this.contact.email,
        name: this.contact.name,
        message: this.contact.message,
        created: new Date().toISOString()
      },
      mutation: addContact
    })
      .then(({ data }: any) => {
        console.log('data: ', data)
      })
      .catch((error: any) => {
        console.log(error)
      })
  }

  @Watch('contact')
  onChangeContact() {
    console.log('contact ne: ', this.contact)
  }
}
</script>
